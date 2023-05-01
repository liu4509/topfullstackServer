import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
  constructor(@InjectModel(User) private readonly model) {}
}
