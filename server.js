const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/style.css') {
    fs.readFile('style.css', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === '/script.js') {
    fs.readFile('script.js', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
      }
    });
  }else if (req.url === '/materials/pomodoro.png') {
    fs.readFile('materials/pomodoro.png', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.write(data);
        res.end();
      }
    });
  }else if (req.url === '/materials/bell.mp3') {
  const soundPath = path.join(__dirname, 'materials', 'bell.mp3');
  fs.readFile(soundPath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
      res.write(data);
      res.end();
    }
  });
}
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});