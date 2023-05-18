import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // 明确指定使用是哪一个框架 通过泛型
  const app = await NestFactory.create<NestExpressApplication>(AdminModule);
  app.enableCors();
  // 静态文件托管
  app.useStaticAssets('uploads', {
    // 前缀
    prefix: '/uploads',
  });
  // swagger nestjs 官网配置
  const config = new DocumentBuilder()
    .setTitle('全栈之巅-后台管理 API')
    .setDescription('供后台管理界面调用的服务端 API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('http://127.0.0.1:3000');
  console.log('http://127.0.0.1:3000/api-docs');
}
bootstrap();
