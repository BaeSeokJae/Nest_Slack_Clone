import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Posts } from './Posts';

@Entity('dislike_table', { schema: 'public' })
export class DislikeTable {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'user_id' })
  userId: string;

  @ManyToOne(() => Posts, (posts) => posts.dislikeTables, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'post_id', referencedColumnName: 'id' }])
  Post: Posts;
}
