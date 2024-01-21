import { Transform } from 'class-transformer';
import { Allow, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @Allow()
  @IsString()
  name: string;

  @Allow()
  @IsNumber()
  @Transform(({ value }) => {
    return Number(value);
  })
  price: number;

  @Allow()
  @IsString()
  description: string;

  @Allow()
  @IsString()
  image: string;

  @Allow()
  @IsString()
  largeImage: string;

  @Allow()
  @Transform(({ value }) => {
    return Number(value);
  })
  discount: number;

  @Allow()
  @Transform(({ value }) => {
    return Number(value);
  })
  discountAmount: number;

  @Allow()
  @Transform(({ value }) => {
    return new Date(value);
  })
  createdAt: Date;

  @Allow()
  @Transform(({ value }) => {
    return new Date(value);
  })
  updatedAt: Date;
}
