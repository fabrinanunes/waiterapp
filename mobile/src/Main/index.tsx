import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { Container, CategoriesContainer, MenuContainer, Footer, FooterContainer } from './styles';

export function Main() {
  return(
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories/>
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <FooterContainer>
        <Footer>
          <FooterContainer>
            <Button onPress={() => alert('Novo pedido')}>
               Novo Pedido
            </Button>
          </FooterContainer>
        </Footer>
      </FooterContainer>
    </>
  );
}
