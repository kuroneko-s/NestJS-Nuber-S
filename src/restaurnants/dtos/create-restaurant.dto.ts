import { InputType, ArgsType, Field } from '@nestjs/graphql';

// @InputType() // arguments로써 Obejct에 전달받기 위함
@ArgsType() // 분리된 값들을 arguments로 전달해줌
export class CreateRestaurantDto {
  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  isGood?: boolean;

  @Field(() => String)
  ownerName: string;
}
