import { Text } from '../Text';
import { Container } from './styles';
import { ButtonProps } from '../../types/Button.types';

export function Button({ children, onPress, disabled }: ButtonProps){
  return(
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color='#fff'>
        {children}
      </Text>
    </Container>
  );
}
