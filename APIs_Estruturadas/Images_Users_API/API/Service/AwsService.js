const awsRepository = require("../repository/AwsRepository");
const Image = require("../model/Image");

const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-1",
  accessKeyId: "",
  secretAccessKey: "",
});

const s3 = new AWS.S3();
const fs = require("fs");

class AwsService {
  async getImages() {
    const images = await awsRepository.listarImagens();
    const imagesReturn = images.map((image) => {
      this.getImage(image.id);
      return new Image(
        image.id,
        image.titulo,
        image.referencia,
        image.extensao,
        image.id_user
      );
    });
    return imagesReturn;
  }

  async createImage(image) {
    const ref = crypto.randomUUID();
    const newImage = await awsRepository.createImage(
      new Image(image.id, image.titulo, ref, image.extensao, image.id_user)
    );

    await uploadFile(
      `./assets/${image.titulo}.${image.extensao}`,
      "bucketmi74",
      ref
    );

    return new Image(
      newImage.id,
      newImage.titulo,
      newImage.referencia,
      image.extensao,
      newImage.id_user
    );
  }

  async getImage(id) {
    const image = await awsRepository.getImage(id);

    if (image !== null) {
      await downloadFile(
        "bucketmi74",
        `${image.referencia}`,
        `./assets/aws/${image.referencia}.${image.extensao}`
      );
    }
    const imageReturn = !image
      ? null
      : new Image(
          image.id,
          image.titulo,
          image.referencia,
          image.extensao,
          image.id_user
        );
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

const downloadFile = async (bucketName, keyName, downloadPath) => {
  const params = {
    Bucket: bucketName,
    Key: keyName,
  };

  const file = fs.createWriteStream(downloadPath);

  s3.getObject(params).createReadStream().pipe(file);

  file.on("close", () => {
    console.log("Arquivo baixado com sucesso:", downloadPath);
  });
};

const uploadFile = async (filePath, bucketName, keyName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: keyName,
    Body: fileContent,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error("Erro ao fazer o upload:", err);
    } else {
      console.log("Arquivo carregado com sucesso:", data.Location);
    }
  });
};

module.exports = new AwsService();
