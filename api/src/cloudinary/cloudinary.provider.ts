import { v2 as cloudinary } from 'cloudinary';

export const CLOUDINARY = 'CLOUDINARY';

// Le SDK lit automatiquement CLOUDINARY_URL depuis process.env.
// (secure: true force les URLs en https)
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => cloudinary.config({ secure: true }),
};
