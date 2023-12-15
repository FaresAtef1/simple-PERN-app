const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');
const connectionString = 'string';
const containerName = 'trial';
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

// Function to upload an image to Azure Blob Storage
async function uploadImage(localFilePath, blobName) {
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    
    try {
        await blockBlobClient.uploadFile(localFilePath);
        console.log(`File "${blobName}" uploaded successfully.`);
    } catch (error) {
        console.error(`Error uploading file "${blobName}":`, error.message);
    }
}

const localImagePath = 'server\\img11.jpg';
const localFilePath = 'server\\img11_get.jpg';

const blobName = 'russia.jpg';
const blockBlobClient = containerClient.getBlockBlobClient(blobName);

async function downloadBlob() {
    try {
      const downloadResponse = await blockBlobClient.download(0);
      const readableStream = downloadResponse.readableStreamBody;
  
      const writableStream = fs.createWriteStream(localFilePath);
      await new Promise((resolve, reject) => {
        readableStream.pipe(writableStream)
          .on('finish', resolve)
          .on('error', reject);
      });
  
      console.log(`Blob "${blobName}" downloaded to "${localFilePath}" successfully.`);
    } catch (error) {
      console.error(`Error downloading blob "${blobName}":`, error.message);
    }
  }
  
downloadBlob();