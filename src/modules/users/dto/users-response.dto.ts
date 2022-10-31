import { Exclude, Expose } from "class-transformer";

@Exclude()
export class UsersResponseDto {
    @Expose({toClassOnly:true})
    readonly id: string
    @Expose()
    readonly firstName: string;
    @Expose()
    readonly lastName: string;
    @Expose()
    readonly email: string;
    @Expose()
    readonly phoneNumber: string;
    @Expose()
    readonly isActive: boolean;
    @Expose()
    readonly role: [];
    @Expose()
    readonly  createdAt: string;
    @Expose()
    readonly updatedAt: string;

}