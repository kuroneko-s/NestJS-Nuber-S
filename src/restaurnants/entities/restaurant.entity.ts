import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // 그래프ql 타입 정의 데코레이터
@Entity() // typeORM 타입 정의 데코레이터
export class Restaurant {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Boolean, { nullable: true })
  @Column()
  isGood?: boolean;

  @Field(() => String)
  @Column()
  ownerName: string;

  @Field(() => String)
  @Column()
  address: string;
}
