const multer = require('multer');
const b2Service = require('../b2');

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow common file types
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images, PDFs, and documents are allowed.'), false);
    }
  },
});

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.file;
    const fileName = `${Date.now()}-${file.originalname}`;

    // Upload to Backblaze B2
    const uploadResult = await b2Service.uploadFile(
      file.buffer,
      fileName,
      file.mimetype
    );

    res.status(200).json({
      message: 'File uploaded successfully',
      file: {
        id: uploadResult.fileId,
        name: uploadResult.fileName,
        url: uploadResult.url,
        size: file.size,
        type: file.mimetype,
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      error: 'Failed to upload file',
      details: error.message,
    });
  }
};

const getFileUrl = async (req, res) => {
  try {
    const { fileName } = req.params;

    if (!fileName) {
      return res.status(400).json({ error: 'File name is required' });
    }

    const url = await b2Service.getFileUrl(fileName);

    res.status(200).json({ url });
  } catch (error) {
    console.error('Get file URL error:', error);
    res.status(500).json({
      error: 'Failed to get file URL',
      details: error.message,
    });
  }
};

const deleteFile = async (req, res) => {
  try {
    const { fileName, fileId } = req.body;

    if (!fileName || !fileId) {
      return res.status(400).json({ error: 'File name and file ID are required' });
    }

    await b2Service.deleteFile(fileName, fileId);

    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete file error:', error);
    res.status(500).json({
      error: 'Failed to delete file',
      details: error.message,
    });
  }
};

module.exports = {
  upload,
  uploadFile,
  getFileUrl,
  deleteFile,
};
