import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Funcion que se ejecuta primero 
//              v
async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
main();
