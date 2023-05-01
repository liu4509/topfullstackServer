import { prop } from '@typegoose/typegoose';

// 用户模型
// 导出用户的类
export class User {
  // @prop 装饰属性
  @prop()
  username: string;

  @prop()
  password: string;
}
