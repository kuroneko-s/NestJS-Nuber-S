import { InputType, OmitType } from '@nestjs/graphql';
import { IsString, IsBoolean, Length } from 'class-validator';
import { Restaurant } from '../entities/restaurant.entity';

@InputType() // arguments로써 Obejct에 전달받기 위함
// @ArgsType() // 분리된 값들을 arguments로 전달해줌
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}
