import { Product } from './product';
import { CustomerAccount } from './customer-account';

export class ProductSale {
    id: number;
    date: Date;
    product: Product;
    account: CustomerAccount;
    discountRate: number;
    discountedAmount: number;
}
