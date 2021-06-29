import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'c119b8a7-8231-42f5-823a-8b6d904ccbf9',
    description: '질문 게시글 ID',
    required: false,
  })
  @IsOptional()
  @IsString()
  public parent_id: string;

  @ApiProperty({
    example: '질문입니다.',
    description: '게시글 제목',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  public title: string;

  @ApiProperty({
    example: '선형탐색 알고리즘에 대해 궁금합니다.',
    description: '게시글 내용',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  public body: string;

  @ApiProperty({
    example: 1,
    description: '작성자의id값',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  public owner_user_id: string;

  @ApiProperty({
    example: '홍길동',
    description: '작성자의 닉네임',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  public owner_user_dp_name: string;

  @ApiProperty({
    example: 'Not yet',
    description: '태그 id',
    required: true,
  })
  @IsOptional()
  @IsString()
  public tag_id: any;
}
