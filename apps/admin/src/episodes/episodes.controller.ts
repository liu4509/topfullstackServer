import { Course } from '@libs/db/models/course.model';
import { Episode } from '@libs/db/models/episode.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({ model: Episode })
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
  constructor(
    @InjectModel(Episode)
    private readonly model: ReturnModelType<typeof Episode>,
    // 注入模型 因为需要 course 列表
    @InjectModel(Course)
    private readonly courseModel: ReturnModelType<typeof Course>,
  ) {}

  // 通过服务端获取表格显示
  @Get('option')
  // 用到异步查询 async
  async option() {
    // 查询 course 是数组 map变量 并转换格式
    const course = (await this.courseModel.find()).map((v) => ({
      label: v.name,
      value: v._id,
    }));
    return {
      title: '课时管理',
      column: [
        {
          prop: 'course',
          label: '所属课程',
          type: 'select',
          dicData: course,
          rwo: true,
        },
        { prop: 'name', label: '课时名称', sortable: true, span: 24 },
        {
          prop: 'file',
          label: '视频地址',
          listType: 'picture-img',
          span: 24,
          type: 'upload',
          width: '120px',
          action: 'http://127.0.0.1:3000/upload',
        },
      ],
    };
  }
}
