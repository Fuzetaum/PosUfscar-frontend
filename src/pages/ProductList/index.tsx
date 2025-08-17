import React, {
  useEffect,
  useState,
} from 'react';
import { useLoaderData } from 'react-router';

import { Card } from '../../components/Card';

import { ProductCard } from './ProductCard';

import './index.css';

export const ProductList: React.FC = () => {
  const [filterCode, setFilterCode] = useState<string>('');
  const [renderedProducts, setRenderedProducts] = useState<React.ReactNode[]>([]);
  const productList = useLoaderData() as Product[];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let listedProducts = productList;
      if (filterCode.length > 0) listedProducts = productList.filter(product => product.code.toString().startsWith(filterCode));
      setRenderedProducts(listedProducts.map(product => <ProductCard key={`product-${product.code}`} product={product} />));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [filterCode, productList]);

  return (
    <div id="ProductListRoot">
      <Card id="ProductListFilterCard">
        <input id="FilterCodeInput" type="text" placeholder='Código' onChange={event => setFilterCode(event.target.value)} />
      </Card>
      {renderedProducts}
    </div>
  );
};