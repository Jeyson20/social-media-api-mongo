import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsOptional } from "class-validator";
import { SigninAuthDto } from "./signin-auth.dto";

export class SignupAuthDto extends PartialType(SigninAuthDto) {

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string
    
    @IsOptional()
    role: boolean

    @IsOptional()
    phoneNumber: string
}
