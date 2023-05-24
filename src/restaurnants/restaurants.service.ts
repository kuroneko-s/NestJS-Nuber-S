import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Injectable() // @Component
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) // @Resource, @Autowired
    private readonly repository: Repository<Restaurant>, // Repository<?>
  ) {}

  getAll(): Promise<Restaurant[]> {
    // https://typeorm.io/active-record-data-mapper
    // DB 접근
    return this.repository.find();
  }

  createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    const result = this.repository.create({
      ...createRestaurantDto,
    });

    // create and save 차이점
    return this.repository.save(result);
  }

  updateRestaurant({ id, params }: UpdateRestaurantDto) {
    return this.repository.update(id, { ...params });
  }
}
