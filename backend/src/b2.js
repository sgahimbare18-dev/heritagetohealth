const B2 = require('backblaze-b2');

class B2Service {
  constructor() {
    this.b2 = new B2({
      applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
      applicationKey: process.env.B2_APPLICATION_KEY,
    });
    this.bucketName = process.env.B2_BUCKET_NAME;
    this.bucketId = process.env.B2_BUCKET_ID;
    this.authorized = false;
  }

  async authorize() {
    if (!this.authorized) {
      try {
        await this.b2.authorize();
        this.authorized = true;
      } catch (error) {
        console.error('B2 Authorization failed:', error);
        throw error;
      }
    }
  }

  async uploadFile(fileBuffer, fileName, mimeType = 'application/octet-stream') {
    try {
      await this.authorize();

      // Get upload URL
      const uploadUrlResponse = await this.b2.getUploadUrl({
        bucketId: this.bucketId,
      });

      // Upload file
      const uploadResponse = await this.b2.uploadFile({
        uploadUrl: uploadUrlResponse.data.uploadUrl,
        uploadAuthToken: uploadUrlResponse.data.authorizationToken,
        fileName: fileName,
        data: fileBuffer,
        mime: mimeType,
      });

      return {
        fileId: uploadResponse.data.fileId,
        fileName: uploadResponse.data.fileName,
        uploadTimestamp: uploadResponse.data.uploadTimestamp,
        url: `https://f005.backblazeb2.com/file/${this.bucketName}/${fileName}`,
      };
    } catch (error) {
      console.error('B2 Upload failed:', error);
      throw error;
    }
  }

  async getFileUrl(fileName) {
    return `https://f005.backblazeb2.com/file/${this.bucketName}/${fileName}`;
  }

  async deleteFile(fileName, fileId) {
    try {
      await this.authorize();

      await this.b2.deleteFileVersion({
        fileName: fileName,
        fileId: fileId,
      });

      return { success: true };
    } catch (error) {
      console.error('B2 Delete failed:', error);
      throw error;
    }
  }
}

module.exports = new B2Service();
