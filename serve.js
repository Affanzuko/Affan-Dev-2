const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0].split('#')[0];
  let safePath = path.normalize(decodeURIComponent(cleanUrl)).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(BASE_DIR, safePath);

  // If directory, check index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>404 Not Found — AFFAN.DEV</title>
        <link rel="stylesheet" href="/assets/css/style.css">
      </head>
      <body style="display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;">
        <div class="container" style="max-width:500px;">
          <h1 style="color:var(--color-accent);font-size:3rem;margin-bottom:1rem;">404</h1>
          <h2 style="color:var(--color-text);margin-bottom:1rem;">Page Not Found</h2>
          <p style="color:var(--color-muted);margin-bottom:2rem;">The requested page does not exist or has moved.</p>
          <a href="/" class="btn btn-primary">Return Home</a>
        </div>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  AFFAN.DEV Local Development Server`);
  console.log(`  Server running at: http://localhost:${PORT}`);
  console.log(`  Press Ctrl + C to stop`);
  console.log(`======================================================\n`);
});
