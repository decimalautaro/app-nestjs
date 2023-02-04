import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ROLES } from "src/constants/roles";

export class UserDTO {
    @IsNotEmpty()
    @IsString()
    firsName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsEnum(ROLES)
    role: ROLES;
}