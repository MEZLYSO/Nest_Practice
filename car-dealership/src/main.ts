import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Funcion que se ejecuta primero 
//              v
async function main() {
  const app = await NestFactory.create(AppModule);

  // Validacion de DTO usando validationPipe
  // En esta linea definimos pipes globales
  app.useGlobalPipes(
    new ValidationPipe({
      //Filtra la data solo obtiene los que requiere
      whitelist: true,
      // Lanza un error si hay propiedades que no existen
      forbidNonWhitelisted: true,
    })
  )

  await app.listen(process.env.PORT ?? 3000);
}
main();
