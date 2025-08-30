/**
 * Utility function to download images from internet URLs and save them to the project
 * 
 * This file should be run with Node.js using:
 * node src/utils/downloadImage.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

/**
 * Downloads an image from a URL and saves it to the specified path
 * @param {string} url - The URL of the image to download
 * @param {string} destination - The destination path where the image should be saved
 * @returns {Promise<string>} - A promise that resolves with the destination path
 */
function downloadImage(url, destination) {
  return new Promise((resolve, reject) => {
    // Create the directory if it doesn't exist
    const dir = path.dirname(destination);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Determine the protocol (http or https)
    const client = url.startsWith('https') ? https : http;

    const request = client.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(destination);
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          console.log(`✅ Image downloaded: ${destination}`);
          resolve(destination);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        console.log(`Redirecting to: ${response.headers.location}`);
        downloadImage(response.headers.location, destination)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`Failed to download image: Status Code ${response.statusCode}`));
      }
    });

    request.on('error', (err) => {
      console.error(`❌ Error downloading image: ${err.message}`);
      reject(err);
    });
  });
}

/**
 * Example usage:
 * 
 * You can call this function with your image URLs and destination paths
 */
async function downloadTeamImages() {
  const PROJECT_ROOT = path.resolve(__dirname, '../../');
  const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
  
  // Add your image URLs here
  const imagesToDownload = [
    {
      url: 'https://example.com/ceo-image.jpg',
      destination: path.join(PUBLIC_DIR, 'images/team/ceo.jpg')
    },
    {
      url: 'https://example.com/cto-image.jpg',
      destination: path.join(PUBLIC_DIR, 'images/team/cto.jpg')
    },
    {
      url: 'https://example.com/coo-image.jpg',
      destination: path.join(PUBLIC_DIR, 'images/team/coo.jpg')
    }
  ];

  try {
    for (const image of imagesToDownload) {
      await downloadImage(image.url, image.destination);
    }
    console.log('All images downloaded successfully!');
    
    // Update the paths in your aboutData.ts file
    console.log('\nNow update your aboutData.ts file with these paths:');
    imagesToDownload.forEach(image => {
      const relativePath = '/' + path.relative(PUBLIC_DIR, image.destination).replace(/\\/g, '/');
      console.log(relativePath);
    });
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

// Uncomment the line below to run the download function
// downloadTeamImages();

// Export the function for use in other files
module.exports = { downloadImage };
