import { readFileSync, writeFileSync } from 'fs'
import { join, dirname, resolve, relative } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const indexFile = join(process.cwd(), 'index.md')
const outputFile = join(process.cwd(), 'prov-o.md')

// Track visited files to prevent infinite recursion
const visitedFiles = new Set()
const collectedFiles = []
const fileToAnchor = new Map()

// Extract markdown links: [text](path.md) or [text](path)
const linkRegex = /\[([^\]]+)\]\(([^)]+\.md)\)/g
// Extract image links: ![alt](path)
const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g

// Generate anchor ID from file path
function generateAnchorId(filePath) {
    const relativePath = relative(process.cwd(), filePath)
    // Convert path to anchor-friendly ID
    return relativePath
        .replace(/\.md$/, '')
        .replace(/\//g, '-')
        .replace(/_/g, '-')
        .toLowerCase()
}

function extractLinks(content, basePath) {
    const links = []
    let match
    while ((match = linkRegex.exec(content)) !== null) {
        const linkPath = match[2]
        // Resolve relative to the file containing the link
        const absolutePath = resolve(dirname(basePath), linkPath)
        links.push(absolutePath)
    }
    return links
}

function normalizeLinks(content, sourceFile, outputDir, consolidatedFiles) {
    const sourceDir = dirname(sourceFile)
    const consolidatedSet = new Set(consolidatedFiles.map(f => resolve(f)))

    // Normalize markdown links
    content = content.replace(linkRegex, (match, text, linkPath) => {
        const absolutePath = resolve(sourceDir, linkPath)
        // If this is a link to a file being consolidated, convert to anchor link
        if (consolidatedSet.has(absolutePath)) {
            const anchorId = fileToAnchor.get(absolutePath)
            if (anchorId) {
                return `[${text}](#${anchorId})`
            }
            return text
        }
        // Otherwise normalize the path relative to output directory
        let relativePath = relative(outputDir, absolutePath)
        // Add ./ prefix for paths in the same directory
        if (!relativePath.startsWith('..') && !relativePath.startsWith('.')) {
            relativePath = './' + relativePath
        }
        return `[${text}](${relativePath})`
    })

    // Normalize image links
    content = content.replace(imageRegex, (match, alt, imagePath) => {
        const absolutePath = resolve(sourceDir, imagePath)
        // Convert to path relative to output directory
        let relativePath = relative(outputDir, absolutePath)
        // Add ./ prefix for paths in the same directory
        if (!relativePath.startsWith('..') && !relativePath.startsWith('.')) {
            relativePath = './' + relativePath
        }
        return `![${alt}](${relativePath})`
    })

    return content
}

function processFile(filePath) {
    // Normalize path for comparison
    const normalizedPath = resolve(filePath)

    // Skip if already visited (infinite recursion protection)
    if (visitedFiles.has(normalizedPath)) {
        return
    }

    // Skip if not a markdown file
    if (!normalizedPath.endsWith('.md')) {
        return
    }

    // Skip the output file itself
    if (normalizedPath === resolve(outputFile)) {
        return
    }

    try {
        const content = readFileSync(normalizedPath, 'utf-8')

        // Mark as visited before processing to prevent cycles
        visitedFiles.add(normalizedPath)
        collectedFiles.push(normalizedPath)

        // Generate and store anchor ID for this file
        const anchorId = generateAnchorId(normalizedPath)
        fileToAnchor.set(normalizedPath, anchorId)

        // Extract and process linked files (from original content before normalization)
        const links = extractLinks(content, normalizedPath)
        for (const link of links) {
            processFile(link)
        }
    } catch (error) {
        // File doesn't exist or can't be read - skip
        console.warn(`Warning: Could not read ${normalizedPath}, skipping`)
    }
}

// Start from index.md
processFile(indexFile)

// Combine all collected files with link normalization
const outputDir = dirname(outputFile)
const contents = collectedFiles.map(file => {
    const content = readFileSync(file, 'utf-8')
    const anchorId = fileToAnchor.get(file)
    const anchorTag = anchorId ? `<a id="${anchorId}"></a>\n\n` : ''
    const normalizedContent = normalizeLinks(content, file, outputDir, collectedFiles)
    return anchorTag + normalizedContent
})
const combined = contents.join('\n\n\n\n\n\n{=}\n\n\n\n')

writeFileSync(outputFile, combined)
console.log(`Consolidated ${collectedFiles.length} files into ${outputFile}`)
console.log(`Files processed in order:`)
collectedFiles.forEach((file, i) => {
    const anchorId = fileToAnchor.get(file)
    console.log(`  ${i + 1}. ${file.replace(process.cwd(), '.')} (#${anchorId})`)
})
