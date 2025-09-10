import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 👇 Enable CORS
app.enableCors({
  origin: [
    'http://localhost:3001', // local dev
    'https://job-board-ten-opal.vercel.app' // deployed frontend
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});


await app.listen(process.env.DB_PORT || 3000);
}
bootstrap();
