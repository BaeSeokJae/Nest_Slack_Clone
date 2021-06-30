import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Posts } from './Posts';

@Entity('comments', { schema: 'public' })
export class Comments {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'user_id' })
  userId: string;

  @Column('boolean', { name: 'visible' })
  visible: boolean;

  @Column('text', { name: 'body' })
  body: string;

  @Column('timestamp without time zone', { name: 'created_at' })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at' })
  updatedAt: Date;

  @Column('timestamp without time zone', { name: 'deleted_at' })
  deletedAt: Date;

  @ManyToOne(() => Posts, (posts) => posts.comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'post_id', referencedColumnName: 'id' }])
  Post: Posts;
}
