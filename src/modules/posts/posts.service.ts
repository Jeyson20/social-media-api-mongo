import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsResponseDto } from './dto/posts-response.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Posts, PostsDocument } from './schema/post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Posts.name) private readonly postModel: Model<PostsDocument>) { }

  async create(createPostDto: CreatePostDto) {
    try {

      const createPost = await this.postModel.create(createPostDto);
      return createPost;

    } catch (error) {
      throw new BadRequestException(error.message);
    }

  }
  async findAll() {
    const posts = await this.postModel.find();
    const postsResponse = plainToInstance(PostsResponseDto, posts);
    return postsResponse;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
