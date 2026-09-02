const fs = require('fs');
const content = fs.readFileSync('src/app/blog/[slug]/page.tsx', 'utf8');
const lines = content.split('\n');

// Find the line that starts with "const articleContents"
const startIdx = lines.findIndex(l => l.includes('const articleContents'));

// Find the line that starts with "function ContentSection"
const endIdx = lines.findIndex(l => l.includes('function ContentSection'));

if (startIdx !== -1 && endIdx !== -1) {
    const articleContents = lines.slice(startIdx, endIdx).join('\n');
    fs.writeFileSync('src/data/articlesContent.ts', 'export ' + articleContents);
    
    // Replace the block with import
    lines.splice(startIdx, endIdx - startIdx, 'import { articleContents } from "@/data/articlesContent";');
    fs.writeFileSync('src/app/blog/[slug]/page.tsx', lines.join('\n'));
    console.log('Successfully refactored articleContents');
} else {
    console.log('Could not find start or end indices');
}
