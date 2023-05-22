import { InputType, ArgsType, Field } from '@nestjs/graphql';
import { IsString, IsBoolean, Length } from 'class-validator';

// @InputType() // arguments로써 Obejct에 전달받기 위함
@ArgsType() // 분리된 값들을 arguments로 전달해줌
export class CreateRestaurantDto {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => Boolean)
  @IsBoolean()
  isGood?: boolean;

  @Field(() => String)
  @IsString()
  @Length(5, 10)
  ownerName: string;
}
