import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';

// Vérifie que la connexion à Cloudinary fonctionne (CLOUDINARY_URL valide,
// compte joignable) sans envoyer d'image. Lance : npm run cloudinary:ping
async function main() {
  if (!process.env.CLOUDINARY_URL) {
    console.error('❌ CLOUDINARY_URL absent du .env');
    process.exit(1);
  }

  cloudinary.config({ secure: true });

  try {
    const result = await cloudinary.api.ping();
    console.log('✅ Cloudinary OK :', result); // { status: 'ok' }
    process.exit(0);
  } catch (error) {
    console.error('❌ Échec de connexion à Cloudinary :', error);
    process.exit(1);
  }
}

void main();
