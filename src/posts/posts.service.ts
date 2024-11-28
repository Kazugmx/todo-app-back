import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  createUser() {
    try {
      return { hello: 'world' };
    } catch {
      return { description: 'ERR: user conflict', status: false };
    }
  }
}

export class Resolver {}
