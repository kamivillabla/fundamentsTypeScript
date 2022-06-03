export type Sizes = 'small' | 'medium' | 'large';

export interface Product {
  name: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}
