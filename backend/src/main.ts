import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👇 Enable CORS
app.enableCors({
  origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://job-board-ten-opal.vercel.app',
    ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});


await app.listen(4000);
}
bootstrap();
