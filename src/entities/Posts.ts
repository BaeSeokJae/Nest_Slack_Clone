import {
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Comments } from './Comments';
import { DislikeTable } from './DislikeTable';
import { LikeTable } from './LikeTable';
import { PostTags } from './PostTags';
import { Views } from './Views';

@Entity('posts', { schema: 'public' })
export class Posts {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()',
  })
  id: string;

  @Column('character varying', { name: 'parent_id', nullable: true })
  parentId: string | null;

  @Column('character varying', { name: 'title' })
  title: string;

  @Column('text', { name: 'body' })
  body: string;

  @Column('character varying', { name: 'owner_user_id' })
  ownerUserId: string;

  @Column('character varying', { name: 'owner_user_dp_name' })
  ownerUserDpName: string;

  @Column('integer', { name: 'view_count', default: () => '0' })
  viewCount: number;

  @Column('integer', { name: 'comment_count', default: () => '0' })
  commentCount: number;

  @Column('integer', { name: 'like_count', default: () => '0' })
  likeCount: number;

  @Column('integer', { name: 'dislike_count', default: () => '0' })
  dislikeCount: number;

  @Column('boolean', { name: 'visible', default: () => 'true' })
  visible: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => Comments, (comments) => comments.Post)
  comments: Comments[];

  @OneToMany(() => DislikeTable, (dislikeTable) => dislikeTable.Post)
  dislikeTables: DislikeTable[];

  @OneToMany(() => LikeTable, (likeTable) => likeTable.Post)
  likeTables: LikeTable[];

  @OneToMany(() => PostTags, (postTags) => postTags.postId)
  postTags: PostTags[];

  @OneToMany(() => Views, (views) => views.Post)
  views: Views[];
}
