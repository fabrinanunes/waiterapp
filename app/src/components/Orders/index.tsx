import { OrderProps } from '../../types/Order.types';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: OrderProps[] = [
  {
    '_id': '641d07aed425e85cfcab6542',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'quantity': 3,
        'product': {
          'name': 'Coca-cola Lata',
          'imagePath': '1679876640233-coca-cola.png',
          'price': 6,

        },
        '_id': '641d07aed425e85cfcab6543'
      }
    ]
  }
];

export function Orders(){
  return (
    <Container>
      <OrdersBoard icon='🕝' title='Fila de Espera' orders={orders}/>
      <OrdersBoard icon='👩🏼‍🍳' title='Em proparação' orders={[]}/>
      <OrdersBoard icon='✅' title='Pronto' orders={[]}/>
    </Container>
  );
}
