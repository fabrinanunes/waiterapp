import { OrderModalProps } from '../../types/Order.types';
import { Actions, ModalContent, OrderDetais, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { formatCurrency } from '../../utils/formartCurrency';

export function OrderModal({ isVisible = false, order, onClose }: OrderModalProps){
  if(!isVisible || !order){
    return null;
  }

  // let totalPrice = 0;
  // order.products.forEach(({ product, quantity }) => {
  //   totalPrice += product.price*quantity;
  // });

  const totalPrice = order.products.reduce((totalPrice, { product, quantity }) => {
    return totalPrice + (product.price * quantity);
  }, 0);

  return(
    <Overlay>
      <ModalContent>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt="clone icon" />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕝'}
              {order.status === 'IN_PRODUCTION' && '👩🏼‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de Espera'}
              {order.status === 'IN_PRODUCTION' && 'Em Preparação'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>
        <OrderDetais>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({_id, product, quantity}) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <span className='quantity'>{quantity}</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(totalPrice)}</strong>
          </div>
        </OrderDetais>
        <Actions>
          <button type='button' className='primary'>
            <span>👩🏼‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>
          <button type='button' className='secundary'>
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalContent>
    </Overlay>
  );
}
