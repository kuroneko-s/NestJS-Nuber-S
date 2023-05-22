import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  /* @Query(() => Boolean)
  isPizzaGood() {
    return true;
  } */
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(veganOnly);
    return [];
  }

  @Mutation(() => Boolean)
  createRestaurants(@Args() params: CreateRestaurantDto): boolean {
    console.log(params);
    return true;
  }
}
