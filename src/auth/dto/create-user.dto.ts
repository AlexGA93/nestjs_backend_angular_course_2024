// All the information we need to send to our backend

import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    // class validator
    @IsEmail()
    email:      string;

    @IsString()
    name:       string;

    @MinLength(6)
    password:   string;
}
