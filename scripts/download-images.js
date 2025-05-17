const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrls = {
  'hero-bg.jpeg': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
  'product1.jpeg': 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80',
  'product2.jpeg': 'https://images.unsplash.com/photo-1581092162384-8987c1d64926?w=800&q=80',
  'product3.jpeg': 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'service1.jpeg': 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80',
  'service2.jpeg': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  'service3.jpeg': 'https://images.unsplash.com/photo-1581092868835-ea96e0bd6795?w=800&q=80',
  'social1.jpeg': 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80',
  'social2.jpeg': 'https://images.unsplash.com/photo-1581092918194-7e57e816c719?w=800&q=80',
  'social3.jpeg': 'https://images.unsplash.com/photo-1581092786450-7ef25f140997?w=800&q=80',
  'social4.jpeg': 'https://images.unsplash.com/photo-1581092918483-d9986d6b7e67?w=800&q=80'
};

const downloadImage = (url, filename) => {
  const imagePath = path.join(__dirname, '..', 'public', 'images', filename);
  
  if (!fs.existsSync(path.join(__dirname, '..', 'public', 'images'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'public', 'images'), { recursive: true });
  }

  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(imagePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

Object.entries(imageUrls).forEach(([filename, url]) => {
  downloadImage(url, filename);
}); 