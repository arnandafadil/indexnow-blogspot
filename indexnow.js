// Script untuk melaporkan URL ke Bing menggunakan IndexNow API
const axios = require('axios');

const apiKey = '13b34fb3994545a9947497b7a0520b8e'; // Ganti dengan API Key dari IndexNow
const baseUrl = 'https://api.indexnow.org/indexnow';

async function sendToIndexNow(url) {
  const payload = {
    url: url,
    key: apiKey
  };

  try {
    const response = await axios.post(baseUrl, payload);
    console.log(`URL berhasil dikirim: ${url}`);
  } catch (error) {
    console.error(`Terjadi kesalahan: ${error.message}`);
  }
}

// Kirim URL blogspot
sendToIndexNow('https://namablog.blogspot.com/'); // Ganti dengan URL Blogspot yang ingin diindeks
