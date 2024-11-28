import { Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly PostsService: PostsService) {}

  @Post('/post')
  createUser() {
    return this.PostsService.createUser();
  }
}
