import { FlatList } from 'react-native';

import { Product, ProductDetails, ProductImage } from './styles';
import { products } from '../../mocks/products';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formartCurrency';

export function Menu(){
  return(
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://192.168.0.202:3001/uploads/${product.imagePath}`
            }}
          />
          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
          </ProductDetails>
        </Product>
      )}
    />
  );
}
