import { Allow, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @Allow()
  @IsString()
  name: string;

  @Allow()
  @IsNumber()
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
  discount: number;

  @Allow()
  discountAmount: number;
}
