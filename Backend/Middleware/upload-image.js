require("dotenv").config();
const sharp = require("sharp");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY || "AKIAVWABJQTISYNENCOJ";
const AWS_SECRET_KEY =
  process.env.AWS_SECRET_KEY || "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";
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME || "bymave-ecommerce";
const AWS_REGION = process.env.AWS_PUBLIC_REGION || "us-east-1";

// Configuracion
const s3 = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_PUBLIC_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

const processImages = async (req, res, next) => {
  // No hay imagen
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      ok: false,
      message: "No se han recibido imagenes",
    });
  }

  try {
    const imageUrls = [];

    // Recorremos
    for (const file of req.files) {
      // Convertimos
      const wepBuffer = await sharp(file.buffer)
        .webp({ quality: 80 })
        .toBuffer();

      // Creamos un nombre por imagen
      const fileName = `imagenes/${Date.now()}-${file.originalname}.webp`;

      // Subimos la imagen
      const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: fileName,
        Body: wepBuffer,
        ContentType: "image/webp",
      };

      // Depuramos
      // console.log(fileName);

      // Subimos la imagen
      await s3.send(new PutObjectCommand(uploadParams));

      // Generamos la url
      const imageUrl = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${fileName}`;
      imageUrls.push(imageUrl);
    }

    // Enviamos la url
    req.imageUrls = imageUrls;

    next();
  } catch (error) {
    console.log("Error en el middleware de imagenes", error);
    res.status(500).json({
      ok: false,
      message: "Error en el middleware de imagenes",
    });
  }
};

module.exports = processImages;
