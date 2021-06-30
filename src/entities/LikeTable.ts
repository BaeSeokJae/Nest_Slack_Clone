import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Posts } from './Posts';

@Entity('like_table', { schema: 'public' })
export class LikeTable {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'user_id' })
  userId: string;

  @ManyToOne(() => Posts, (posts) => posts.likeTables, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'post_id', referencedColumnName: 'id' }])
  Post: Posts;
}
