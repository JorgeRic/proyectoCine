'use strict';

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
 
cloudinary.config({
  cloud_name: 'dxvsfljrw',
  api_key: '126115461159252',
  api_secret: 'ynRudnhUDaDIyVWZ1Xq0YvrI6dE'
  });

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'proyectoCine',
  allowedFormats: ['jpg', 'png']
});
 
const parser = multer({ storage: storage });

module.exports = parser