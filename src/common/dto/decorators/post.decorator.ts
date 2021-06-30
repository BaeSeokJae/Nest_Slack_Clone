import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Post = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.post;
  },
);
