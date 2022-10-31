import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({ timestamps: true, versionKey: false })
export class Users {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: ['user', 'admin'], default: 'user' })
    role: string

    @Prop()
    phoneNumber: string;

    @Prop({ default: false })
    isActive: boolean;

}

export const UsersSchema = SchemaFactory.createForClass(Users);