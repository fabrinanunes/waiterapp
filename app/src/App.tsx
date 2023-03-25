import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Orders } from './components/OrdersBoard';

export function App(){
  return(
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
