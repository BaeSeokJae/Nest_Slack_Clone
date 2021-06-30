import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Comments } from 'src/entities/Comments';
import { DislikeTable } from 'src/entities/DislikeTable';
import { LikeTable } from 'src/entities/LikeTable';
import { Posts } from 'src/entities/Posts';
import { PostTags } from 'src/entities/PostTags';
import { Tag } from 'src/entities/Tag';
import { Views } from 'src/entities/Views';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Comments, DislikeTable, LikeTable, Posts, PostTags, Tag, Views],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'srfc/migrations' },
  synchronize: true,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
