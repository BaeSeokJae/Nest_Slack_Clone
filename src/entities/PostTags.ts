import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Posts } from './Posts';
import { Tag } from './Tag';

@Entity('postTags', { schema: 'public' })
export class PostTags {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @ManyToOne(() => Posts, (posts) => posts.postTags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'postIdId', referencedColumnName: 'id' }])
  postId: Posts;

  @ManyToOne(() => Tag, (tag) => tag.postTags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'tag_id', referencedColumnName: 'id' }])
  Tag: Tag;
}
