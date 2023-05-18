import { User } from '@libs/db/models/user.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  // 创建和用于更新的 DTO
  model: User,
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
  // 引用模块 crud
  constructor(
    @InjectModel(User)
    private readonly model: ReturnModelType<typeof User>,
  ) {}
  // 通过服务端获取表格显示
  @Get('option')
  option() {
    return {
      title: '用户管理',
      column: [
        { prop: 'username', label: '用户名称', sortable: true },
        { prop: 'password', label: '用户密码' },
      ],
    };
  }
}
