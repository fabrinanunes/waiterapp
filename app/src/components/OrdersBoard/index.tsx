import { useState } from 'react';
import { OrderProps, OrdersBoardProps } from '../../types/Order.types';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps){
  const [isModalVisable, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | OrderProps>(null);

  function handleOrderModal(order: OrderProps){
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal(){
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal isVisible={isModalVisable} order={selectedOrder} onClose={handleCloseModal}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0  && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={() => handleOrderModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} {order.products.length == 1 ? 'item' : 'itens'}</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
