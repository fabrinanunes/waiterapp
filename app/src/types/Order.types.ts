import { ProductProps } from './Product.types';

export interface OrderProps {
  _id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: {
    _id: string;
    quantity: number;
    product: ProductProps;
  }[]
}

export interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: OrderProps[];
}

export interface OrderModalProps {
  isVisible: boolean;
  order: OrderProps | null;
  onClose: () => void;
}
