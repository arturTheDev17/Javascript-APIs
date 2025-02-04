const imageRepository = require('../repository/imageRepository');

class ImageService {
  async getImages() {
    return await imageRepository.listarImagens();
  }

  async createImage(image) {
    return await imageRepository.createImage(image);
  }

  async getImage(id) {
    return await imageRepository.getImage(id);
  }

  async updateImage(id, image) {
    return await imageRepository.updateImage(id, image);
  }

  async deleteImage(id) {
    return await imageRepository.deleteImage(id);
  }
}
module.exports = new ImageService();
