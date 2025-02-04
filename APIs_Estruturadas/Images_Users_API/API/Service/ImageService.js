const imageRepository = require("../Repository/ImagesRepository");
const Image = require("../Model/Image");
class ImageService {
  async getImages() {
    const images = await imageRepository.listarImagens();
    const imagesReturn = images.map((image) => {
      return new Image(
        image.id,
        image.titulo,
        image.referencia,
        image.data_criacao
      );
    });
    return imagesReturn;
  }

  async createImage(image = {}) {
    const newImage = await imageRepository.createImage(
      new Image(image.id, image.titulo, image.referencia, image.data_criacao)
    );
    return new Image(
      newImage.id,
      newImage.titulo,
      newImage.referencia,
      newImage.data_criacao
    );
  }

  async getImage(id) {
    const image = await imageRepository.getImage(id);
    const imageReturn = new Image(
      image.id,
      image.titulo,
      image.referencia,
      image.data_criacao
    );
    return imageReturn;
  }

  async updateImage(id, image) {
    const retorno = await imageRepository.updateImage(id, image);
    return retorno >= 1 ? "Image updated" : "Image not found";
  }

  async deleteImage(id) {
    return await imageRepository.deleteImage(id);
  }
}
module.exports = new ImageService();
