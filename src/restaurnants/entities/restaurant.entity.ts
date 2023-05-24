import { IsString, Length, IsOptional, IsBoolean } from 'class-validator';
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
  @IsString() // entity, dto 둘다 검증.
  @Length(5)
  name: string;

  @Field(() => Boolean, { defaultValue: true }) // graphql
  @Column({ default: true }) // db
  @IsOptional() // dto
  @IsBoolean() // dto
  isGood: boolean;

  @Field(() => String)
  @Column()
  @IsString()
  ownerName: string;

  @Field(() => String)
  @Column()
  @IsString()
  address: string;

  @Field(() => String)
  @Column()
  @IsString()
  categoryName?: string;
}
