import { IsString, IsDefined, Length } from 'class-validator'

export class AuthLoginDto {
  @IsDefined({ message: 'not-defined' })
  @IsString({ message: 'not-string' })
  @Length(3, 20, { message: 'not-valid-length' })
  username: string

  @IsDefined({ message: 'not-defined' })
  @IsString({ message: 'not-string' })
  @Length(3, 20, { message: 'not-valid-length' })
  password: string
}
