import { ApiProperty } from '@nestjs/swagger';
import { Ref, modelOptions, prop } from '@typegoose/typegoose';
import { Course } from './course.model';

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

  // file 传进的值是 string[] 类型
  @ApiProperty({ description: '文件地址' })
  @prop()
  file: string[];

  // TODO：需要连课程表一起操作数据库
  // 参考类型 Ref(模型类) 关联 Course 模型
  // 真正给 mongoose 用的
  // TODO: 后期可能出现 循环引用 互相依赖 导致值为空 可以转字符串 'Episode'
  @ApiProperty({ description: '课程' })
  // 课时关联课程
  @prop({ ref: 'Course' })
  // 类型定义
  course: Ref<Course>;
}
