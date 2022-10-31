import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto{

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string
    
    @IsOptional()
    email: string;

    @IsOptional()
    role: string

    @IsOptional()
    phoneNumber: string
    
}
