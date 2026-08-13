import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { PrismaService } from '../prisma/prisma.service';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly cloudinary: CloudinaryService,
    private readonly prisma: PrismaService,
  ) {}

  // POST /upload  (multipart/form-data : champ "file" + champs texte optionnels)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body()
    body: {
      title?: string;
      description?: string;
      uploadedBy?: string;
      familyId?: string;
    },
  ) {
    if (!file) {
      throw new BadRequestException('Aucun fichier fourni (champ "file").');
    }

    // 1. Envoi de l'image à Cloudinary
    const result = await this.cloudinary.uploadImage(file);

    // 2. Enregistrement des métadonnées + URL dans Postgres
    return this.prisma.uploadFiles.create({
      data: {
        url: result.secure_url,
        title: body.title,
        description: body.description,
        uploadedBy: body.uploadedBy ? Number(body.uploadedBy) : undefined,
        familyId: body.familyId ? Number(body.familyId) : undefined,
      },
    });
  }
}
