const fs = require("fs");

const AWS = require("aws-sdk");
const s3 = new AWS.S3();


const uploadFile = (filePath, bucketName, keyName) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName, // Nome do seu bucket S3
    Key: keyName, // Nome do arquivo no S3
    Body: fileContent, // Conteúdo do arquivo
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error("Erro ao fazer o upload:", err);
    } else {
      console.log("Arquivo carregado com sucesso:", data.Location);
    }
  });
};

const downloadFile = (bucketName, keyName, downloadPath) => {
  const params = {
    Bucket: bucketName,
    Key: keyName,
  };

  fs.writeFileSync(`./assets/${keyName}.jpg`, "");

  const file = fs.createWriteStream(downloadPath);

  s3.getObject(params).createReadStream().pipe(file);

  file.on("close", () => {
    console.log("Arquivo baixado com sucesso:", downloadPath);
  });
};

uploadFile("./assets/Inter.jpg", "bucketmi74", "Inter.jpg");

// Exemplo de uso
// downloadFile('nome-do-seu-bucket', 'arquivo-no-s3.txt', './caminho/do/arquivo-baixado.txt');
