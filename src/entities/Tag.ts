import { Column, Entity, OneToMany } from 'typeorm';
import { PostTags } from './PostTags';

@Entity('tag', { schema: 'public' })
export class Tag {
  @Column('uuid', { primary: true, name: 'id' })
  id: string;

  @Column('character varying', { name: 'tag_type' })
  tagType: string;

  @Column('character varying', { name: 'name' })
  name: string;

  @OneToMany(() => PostTags, (postTags) => postTags.Tag)
  postTags: PostTags[];
}
