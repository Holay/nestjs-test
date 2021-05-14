import { NestFactory } from '@nestjs/core';
// import { RedisIoAdapter } from './adapters/redis-io.adapter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useWebSocketAdapter(new RedisIoAdapter(app))
  await app.listen(process.env.PORT || 3000);
  app.enableCors({ origin: '*' });
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
