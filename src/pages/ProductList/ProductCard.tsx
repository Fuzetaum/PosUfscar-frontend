import React from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

import './ProductCard.css';

export type ProductCardProps = React.HTMLAttributes<HTMLDivElement> & {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, ...remainingProps }) => {
  return (
    <Card className='ProductCard' {...remainingProps}>
      <img src={product.photo} alt={product.name} />
      <section>
        <h1>({product.code}) {product.name}</h1>
        <p>{product.category}</p>
        <p>R${product.price}</p>
        <div className="ProductCardButtonDiv">
          <Button>Editar</Button>
          <Button>Excluir</Button>
        </div>
      </section>
    </Card>
  );
};