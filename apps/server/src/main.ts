import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // swagger nestjs 官网配置
  const config = new DocumentBuilder()
    .setTitle('全栈之巅-后台管理 API')
    .setDescription('供后台管理界面调用的服务端 API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.SERVER_PORT || 3001;

  await app.listen(port);
  console.log(`${process.env.SERVER_WEB}:${port}`);
  console.log(`${process.env.SERVER_WEB}:${port}/api-docs`);
}
bootstrap();
