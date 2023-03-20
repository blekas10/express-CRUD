import express from 'express';
import getProducts from './queries/get-products';
import getProduct from './queries/get-product';
import createProduct from './mutations/create-product';
import putProduct from './mutations/put-product';
import patchProduct from './mutations/pacth-product';
import deleteProduct from './mutations/delete-product';

const productsRouter = express.Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', getProduct);

productsRouter.post('/', createProduct);
productsRouter.put('/:id', putProduct);
productsRouter.patch('/:id', patchProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;
