/**
 * Download images for the About page
 * 
 * Run this script with: node src/scripts/downloadAboutImages.js
 */

const { downloadImage } = require('../utils/downloadImage');
const path = require('path');
const fs = require('fs');

const PROJECT_ROOT = path.resolve(__dirname, '../../');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');

async function downloadAboutImages() {
  // Create an array of image URLs and their destination paths
  const imagesToDownload = [
    // Hero background image
    {
      url: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      destination: path.join(PUBLIC_DIR, 'images/hero-bg.jpg'),
      description: 'Hero background - fiber optics'
    },
    
    // Team member images - replace these URLs with your actual team photos
    {
      url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3',
      destination: path.join(PUBLIC_DIR, 'images/team/ceo.jpg'),
      description: 'CEO portrait'
    },
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3',
      destination: path.join(PUBLIC_DIR, 'images/team/cto.jpg'),
      description: 'CTO portrait'
    },
    {
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3',
      destination: path.join(PUBLIC_DIR, 'images/team/coo.jpg'),
      description: 'COO portrait'
    }
  ];

  console.log('Starting download of About page images...');

  try {
    // Create the team directory if it doesn't exist
    const teamDir = path.join(PUBLIC_DIR, 'images/team');
    if (!fs.existsSync(teamDir)) {
      fs.mkdirSync(teamDir, { recursive: true });
    }

    // Download each image
    for (const image of imagesToDownload) {
      console.log(`Downloading ${image.description} from ${image.url}`);
      await downloadImage(image.url, image.destination);
    }

    console.log('\n✅ All images downloaded successfully!');
    
    // Print paths to use in aboutData.ts
    console.log('\nUse these paths in your aboutData.ts file:');
    imagesToDownload.forEach(image => {
      const relativePath = '/' + path.relative(PUBLIC_DIR, image.destination).replace(/\\/g, '/');
      console.log(`${image.description}: "${relativePath}"`);
    });

  } catch (error) {
    console.error('❌ Error downloading images:', error);
  }
}

// Run the function
downloadAboutImages();
