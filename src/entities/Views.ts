import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Posts } from './Posts';

@Entity('views', { schema: 'public' })
export class Views {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'user_id' })
  userId: string;

  @ManyToOne(() => Posts, (posts) => posts.views, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'post_id', referencedColumnName: 'id' }])
  Post: Posts;
}
