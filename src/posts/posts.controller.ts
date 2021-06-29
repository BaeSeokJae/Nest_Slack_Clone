import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create.post.dto';
import { UpdatePostDto } from './dto/update.post.dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostDto } from 'src/common/dto/post.dto';

@ApiTags('Posts')
@Controller('community')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOkResponse({
    description: '성공',
    type: PostDto,
  })
  @ApiOperation({ summary: '전체 게시글 목록' })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '현재 페이지 넘버',
  })
  @Get('posts')
  async allPosts(@Query('page') page: number) {
    return await this.postsService.allPosts(page);
  }

  @ApiOperation({ summary: '게시글 생성' })
  @Post('posts')
  async createPosts(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.createPosts(createPostDto);
  }

  @ApiOperation({ summary: '상세 게시글 내용' })
  @ApiParam({
    name: 'id',
    required: true,
    description: '게시글 id',
  })
  @Get('posts/:id')
  async findPost(@Param('id') id: string) {
    return await this.postsService.findPost(id);
  }

  @ApiOperation({ summary: '게시글 수정' })
  @ApiParam({
    name: 'id',
    required: true,
    description: '게시글 id',
  })
  @Patch('posts/:id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return await this.postsService.updatePost(id, updatePostDto);
  }

  @ApiOperation({ summary: '게시글 삭제' })
  @ApiParam({
    name: 'id',
    required: true,
    description: '게시글 id',
  })
  @Delete('posts/:id')
  async removePost(@Param('id') id: string) {
    return await this.postsService.removePost(id);
  }
}
