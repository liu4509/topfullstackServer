import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from '@app/common';
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    CommonModule,
    // 用 async 异步方法调用
    MulterModule.registerAsync({
      useFactory() {
        return {
          // 通过 阿里云 oss
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESSKEYID,
              accessKeySecret: process.env.OSS_ACCESSKEYSECRET,
              bucket: process.env.OSS_BUCKET,
            },
            // to set path prefix for files, could be string or function
            destination: '',
          }),
        };
      },
      // 定义上传文件保存地址
      // dest: 'uploads',
    }),
    UsersModule,
    CoursesModule,
    EpisodesModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
