import React from 'react';
import { Form, useNavigate } from 'react-router';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

import './index.css';

export const NewProduct: React.FC = () => {
  const navigate = useNavigate();

  const handleCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/products');
  };

  return (
    <Card id="NewProductCard">
      <Form action="/products" method="post" id='NewProductForm'>
        <label>Nome:</label>
        <input name="name" type="text" />
        <label>Descrição:</label>
        <textarea name="description" />
        <label>Categoria:</label>
        <input name="category" type="text" />
        <label>Preço:</label>
        <input name="price" type="number" />
        <label>Foto:</label>
        <input name="photo" type="url" />
        <div>
          <Button type="submit">Criar</Button>
          <Button className='CancelButton' onClick={handleCancel}>Cancelar</Button>
        </div>
      </Form>
    </Card>
  );
};