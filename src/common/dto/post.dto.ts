import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty({
    example: 'c119b8a7-8231-42f5-823a-8b6d904ccbf9',
    description: '아이디',
    required: true,
  })
  id: string;

  @ApiProperty({
    example: 'c119b8a7-8231-42f5-823a-8b6d904ccbf9',
    description: '답변 달릴 게시글 id',
    required: true,
  })
  parent_id: string;

  @ApiProperty({
    example: '게시글 제목',
    description: '작성된 게시글 제목',
    required: true,
  })
  title: string;

  @ApiProperty({
    example: '게시글 내용',
    description: '작성된 게시글 내용',
    required: true,
  })
  body: string;

  @ApiProperty({
    example: 1,
    description: '작성자의 id값',
    required: true,
  })
  owner_user_id: string;

  @ApiProperty({
    example: '홍길동',
    description: '작성자의 닉네임',
    required: true,
  })
  owner_user_dp_name: string;

  @ApiProperty({
    example: 0,
    description: '조회수',
    required: true,
  })
  view_count: number;

  @ApiProperty({
    example: 0,
    description: '댓글 수',
    required: true,
  })
  comment_count: number;

  @ApiProperty({
    example: 0,
    description: '좋아요 수',
    required: true,
  })
  like_count: number;

  @ApiProperty({
    example: 0,
    description: '싫어요 수',
    required: true,
  })
  dislike_count: number;

  @ApiProperty({
    example: true,
    description: '게시글 삭제 여부',
    required: true,
  })
  visible: boolean;

  @ApiProperty({
    example: '2021-06-28 19:15:19',
    description: '작성 시간',
    required: true,
  })
  created_at: Date;

  @ApiProperty({
    example: '2021-06-29 15:32:33',
    description: '수정 시간',
    required: true,
  })
  updated_at: Date;

  @ApiProperty({
    example: '2021-06-29 15:32:33',
    description: '삭제 시간',
    required: true,
  })
  deleted_at: Date;
}
