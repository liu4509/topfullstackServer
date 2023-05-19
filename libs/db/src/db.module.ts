import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';

import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';

// 统一引用
const models = TypegooseModule.forFeature([User, Course, Episode]);

// @Global() 装饰 标记为全局引用
@Global()
@Module({
  imports: [
    // 异步调用 防止出现模块没有加载数据请求已发起
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
        };
      },
    }),
    // TypegooseModule.forRoot('', {}),
    //引用
    models,
  ],
  providers: [DbService],
  // 导出
  exports: [DbService, models],
})
export class DbModule {}
