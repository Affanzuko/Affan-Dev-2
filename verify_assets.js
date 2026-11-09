const fs = require('fs');
const path = require('path');

function checkAssetsInHtml(filePath, baseDir) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // Match src="..." or href="..." for css/images/favicons
  const assetRegex = /(?:src|href)=["']([^"']+)["']/g;
  let match;
  let allFound = true;
  console.log('Checking assets in ' + filePath + ':');
  while ((match = assetRegex.exec(content)) !== null) {
    const target = match[1];
    if (target.startsWith('http://') || 
        target.startsWith('https://') || 
        target.startsWith('#') || 
        target.startsWith('mailto:') ||
        target.startsWith('data:')) {
      continue;
    }
    const cleanTarget = target.split('#')[0].split('?')[0];
    if (!cleanTarget) continue;

    const resolvedPath = path.resolve(baseDir, cleanTarget);
    if (!fs.existsSync(resolvedPath)) {
      console.error('  MISSING:', cleanTarget, 'resolved to', resolvedPath);
      allFound = false;
    } else {
      console.log('  FOUND:', cleanTarget);
    }
  }
  return allFound;
}

const c1 = checkAssetsInHtml('index.html', __dirname);
const c2 = checkAssetsInHtml('projects/concerttix.html', path.join(__dirname, 'projects'));
const c3 = checkAssetsInHtml('projects/niki-frozen.html', path.join(__dirname, 'projects'));
const c4 = checkAssetsInHtml('projects/concerttix/index.html', path.join(__dirname, 'projects', 'concerttix'));
const c5 = checkAssetsInHtml('projects/niki-frozen/index.html', path.join(__dirname, 'projects', 'niki-frozen'));

if (c1 && c2 && c3 && c4 && c5) {
  console.log('\n=========================================');
  console.log('ALL REFERENCED ASSETS & LINKS EXIST ON DISK!');
  console.log('=========================================');
} else {
  console.error('\nSOME ASSETS ARE MISSING!');
  process.exit(1);
}
