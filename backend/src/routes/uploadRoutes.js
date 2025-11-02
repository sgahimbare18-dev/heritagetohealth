const express = require('express');
const { upload, uploadFile, getFileUrl, deleteFile } = require('../controllers/uploadController');

const router = express.Router();

// POST /api/upload - Upload a file
router.post('/', upload.single('file'), uploadFile);

// GET /api/upload/:fileName - Get file URL
router.get('/:fileName', getFileUrl);

// DELETE /api/upload - Delete a file
router.delete('/', deleteFile);

module.exports = router;
