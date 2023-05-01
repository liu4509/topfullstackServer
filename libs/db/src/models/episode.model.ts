import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';

// mongoose配置
@modelOptions({
  schemaOptions: {
    // 给下面模型加两个字段 创建 更新
    timestamps: true,
  },
})

// 用户模型
// 导出用户的类
export class Episode {
  // @Api 开头都是给 swagger 文档用的
  // @prop 装饰属性
  // 定义属性的名字
  @ApiProperty({ description: '课时名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '文件地址' })
  @prop()
  file: string;
}
