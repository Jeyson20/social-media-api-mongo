import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsOptional } from "class-validator";
import { type } from "os";
import { Roles } from "src/modules/roles/schema/roles-schema";
import { SigninAuthDto } from "./signin-auth.dto";

export class SignupAuthDto extends PartialType(SigninAuthDto) {

    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string
    
    @IsOptional()
    roles: string[]

    @IsOptional()
    phoneNumber: string
}
