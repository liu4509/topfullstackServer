import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';

import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';

// 统一引用
const models = TypegooseModule.forFeature([User]);

// @Global() 装饰 标记为全局引用
@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/topfullstack', {}),
    //引用
    models,
  ],
  providers: [DbService],
  // 导出
  exports: [DbService, models],
})
export class DbModule {}
