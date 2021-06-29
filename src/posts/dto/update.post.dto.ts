import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreatePostDto } from './create.post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    example: '수정된 게시글 제목',
    description: '수정된 게시글 제목',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    example: '수정된 게시글 내용',
    description: '수정된 게시글 내용',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly body: string;

  @ApiProperty({
    example: '수정된 게시글 태그',
    description: '수정된 게시글 태그 id',
    required: false,
  })
  @IsOptional()
  readonly tag_id: any;

  @ApiProperty({
    example: false,
    description: '게시글 삭제 여부',
    required: false,
  })
  @IsOptional()
  readonly visible: boolean;
}
