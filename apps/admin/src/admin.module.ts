import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule,
    MulterModule.register({
      // 通过 阿里云 oss
      storage: MAO({
        config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI5tRzgqDY1g87ASE4G4tn',
          accessKeySecret: 'hev9eQJhLAA1YV3h1ik0R2Uk7ndluP',
          bucket: 'zsyghmz-tfs',
        },
        // to set path prefix for files, could be string or function
        destination: '',
      }),
      // 定义上传文件保存地址
      // dest: 'uploads',
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
