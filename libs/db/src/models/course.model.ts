import { ApiProperty } from '@nestjs/swagger';
import { Ref, modelOptions, prop } from '@typegoose/typegoose';
import { Episode } from './episode.model';

// mongoose配置
@modelOptions({
  schemaOptions: {
    // 给下面模型加两个字段 创建 更新
    timestamps: true,
  },
})

// 用户模型
// 导出用户的类
export class Course {
  // @Api 开头都是给 swagger 文档用的
  // @prop 装饰属性
  // 定义属性的名字
  @ApiProperty({ description: '课程名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string;

  // 参考类型 Ref(模型类) 关联 Episode 模型
  @ApiProperty({ description: '课时[]' })
  // 真正给 mongoose 用的
  // TODO: 后期可能出现 循环引用 互相依赖 导致值为空 可以转字符串 'Episode'
  @prop({ ref: 'Episode' })
  // 类型定义
  episodes: Ref<Episode>[];
}
