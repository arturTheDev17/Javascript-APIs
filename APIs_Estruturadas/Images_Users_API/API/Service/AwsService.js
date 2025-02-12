const awsRepository = require("../Repository/AwsRepository");
const Image = require("../Model/Image");

const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const fs = require('fs');

const downloadFile = (bucketName, keyName, downloadPath) => {
  const params = {
    Bucket: bucketName,
    Key: keyName
  };

  const file = fs.createWriteStream(downloadPath);

  s3.getObject(params).createReadStream().pipe(file);

  file.on('close', () => {
    console.log('Arquivo baixado com sucesso:', downloadPath);
  });

};

const uploadFile = (filePath, bucketName, keyName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,  // Nome do seu bucket S3
    Key: keyName,        // Nome do arquivo no S3
    Body: fileContent    // Conteúdo do arquivo
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Erro ao fazer o upload:', err);
    } else {
      console.log('Arquivo carregado com sucesso:', data.Location);
    }
  });
};

// Exemplo de uso
// uploadFile('./assets/romario.jpg' , 'bucketmi74', 'rm_lightyear.jpg');

// // Exemplo de uso
// downloadFile('nome-do-seu-bucket', 'arquivo-no-s3.txt', './caminho/do/arquivo-baixado.txt');


class AwsService {
  async getImages() {
    const images = await awsRepository.listarImagens();
    const imagesReturn = images.map((image) => {
      return new Image(
        image.id,
        image.titulo,
        image.referencia,
        image.id_user
      );
    });
    return imagesReturn;
  }

  async createImage(image = {}) {
    const ref = crypto.randomUUID();
    const newImage = await awsRepository.createImage(
      new Image(image.id, image.titulo, ref, image.id_user)
    );
    uploadFile(`./assets/${image.titulo}.jpg` , 'bucketmi74', ref);
    return new Image(
      newImage.id,
      newImage.titulo,
      newImage.referencia,
      newImage.id_user
    );
  }

  async getImage(id) {
    const image = await awsRepository.getImage(id);
    downloadFile('bucketmi74', image.referencia, `../assets/${image.referencia}.jpg`)
    // downloadFile('bucketmi74', image.referencia, `./assets/imagem.jpg`)
    const imageReturn = !image
      ? null
      : new Image(image.id, image.titulo, image.referencia, image.id_user);
    return imageReturn;
  }

  async updateImage(id, image) {
    const retorno = await awsRepository.updateImage(id, image);
    return retorno >= 1 ? "Image updated" : "Image not found";
  }

  async deleteImage(id) {
    
    return await awsRepository.deleteImage(id);
  }
}
module.exports = new AwsService();
