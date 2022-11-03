import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostsDocument = Posts & Document;

@Schema({ timestamps: true, versionKey: false })
export class Posts {
    
    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    description: string;

    @Prop()
    image: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
