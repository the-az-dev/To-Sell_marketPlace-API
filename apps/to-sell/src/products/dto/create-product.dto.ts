export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  shopId: number;
  amount: number;
}
