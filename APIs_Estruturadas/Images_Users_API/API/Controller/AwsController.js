const awsService = require("../service/AwsService");

async function getImages(req, res) {
  try {
    const images = await awsService.getImages();
    res.json(images);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
}
/*
  O corpo da requisição deve ser conforme abaixo
  {
    "titulo" : "Carro", //Deve ser o nome de uma imagem dentro de assets, por exemplo: 'Inter', excluindo a extensão do arquivo, passada abaixo
    "extensao" : "jpg", //Já que o carro possui extensão jpg, foi colocado aqui
    "id_user" : 1 //deve ser o id de algum usuario no banco de dados
  }
*/
async function createImage(req, res) {
  try {
    const image = await awsService.createImage(req.body);
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
}

/*
  Deve-se usar o id da imagem no banco de dados, 
  OBS: será feito o download da imagem com o nome sendo a referência UUID recuperada da AWS a partir do banco de dados e 
  a extensão de arquivo armazenada no banco
*/
async function getImage(req, res) {
  try {
    const image = await awsService.getImage(req.params.id);
    if (image === null) {
      res.status(404).json({ message: "Image not found" });
    } else {
      res.json(image);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Bad Request" });
  }
}

async function updateImage(req, res) {
  try {
    const image = await awsService.updateImage(req.params.id, req.body);
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
}

async function deleteImage(req, res) {
  try {
    awsService.deleteImage(req.params.id);
    res.status(200).json({ message: "Image deleted" });
  } catch (error) {
    res.status(400);
  }
}

module.exports = {
  getImages,
  createImage,
  getImage,
  updateImage,
  deleteImage,
};
