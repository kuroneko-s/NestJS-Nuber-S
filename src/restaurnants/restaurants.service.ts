import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurant } from './entities/restaurant.entity';

@Injectable() // @Component
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) // @Resource, @Autowired
    private readonly repository: Repository<Restaurant>, // Repository<?>
  ) {}

  getAll(): Promise<Restaurant[]> {
    // DB 접근
    return this.repository.find();
  }
}
