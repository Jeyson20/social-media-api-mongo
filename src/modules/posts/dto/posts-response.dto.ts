import { Exclude, Expose } from "class-transformer";

@Exclude()
export class PostsResponseDto {
    @Expose()
    readonly id: string
    @Expose()
    readonly userId: string;
    @Expose()
    readonly description: string;
    @Expose()
    readonly image: string;
    @Expose()
    readonly  createdAt: string;
    @Expose()
    readonly updatedAt: string;
}