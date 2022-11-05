import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Document, Schema as Schemaa, Types } from 'mongoose';
import { Roles } from 'src/modules/roles/schema/roles-schema';

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

    @Prop([{
        type: Schemaa.Types.String,
        ref: Roles["name"]
    }])
    roles: Types.Array<Roles>

    @Prop()
    phoneNumber: string;

    @Prop({ default: true })
    isActive: boolean;

}

export const UsersSchema = SchemaFactory.createForClass(Users);