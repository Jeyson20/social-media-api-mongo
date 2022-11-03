import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePostDto {

    @IsNotEmpty()
    userId: string

    @IsOptional()
    description: string
    
    @IsOptional()
    image: string;
}
