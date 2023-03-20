import { RequestHandler } from 'express';
import { products } from 'products/data';
import { ProductModel } from '../types';

const getProducts: RequestHandler<
  {},
  ProductModel[],
  undefined,
  {}
> = (req, res) => {
  res.json(products);
};

export default getProducts;
