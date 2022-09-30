//@@ -4,4 +4,10 @@ exports.DATABASE_URI = process.env.DATABASE_URI || "";

exports.IMAGE_BASE_URL = process.env.SERVER;

exports.UPLOAD_PATH = process.env.UPLOAD_PATH || './public/uploads';

exports.ROUNDS = parseInt(process.env.ROUNDS) || 10;

exports.PORT = parseInt(process.env.PORT) || 5000;

exports.SERVER = process.env.SERVER || `http://localhost:${PORT}`;