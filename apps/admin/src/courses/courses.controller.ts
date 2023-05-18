import { Course } from '@libs/db/models/course.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Course,
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>,
  ) {}
  // 通过服务端获取表格显示
  @Get('option')
  option() {
    return {
      title: '课程管理',
      column: [
        {
          prop: 'name',
          label: '课程名称',
          sortable: true,
          search: true,
          regex: true,
          span: 24,
          row: true,
        },
        {
          prop: 'cover',
          label: '课程封面图',
          type: 'upload',
          width: '120',
          listType: 'picture-img',
          action: 'http://127.0.0.1:3000/upload',
        },
      ],
    };
  }
}
