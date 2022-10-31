import { IsNotEmpty, MinLength } from "class-validator";

export class SigninAuthDto {

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
