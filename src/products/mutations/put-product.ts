import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { products } from 'products/data';
import { ProductDataBody, ProductModel } from 'products/types';
import productDataValidationSchema from 'products/validation-schemas/product-data-validation-schema';
import ProductNotFoundError from 'products/product-not-found-error';

const putProduct: RequestHandler<
  { id?: string },
  ProductModel | ErrorResponse,
  ProductDataBody,
  {}
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) throw new ServerSetupError();

  try {
    const productData = productDataValidationSchema.validateSync(req.body);

    const foundProductIndex = products.findIndex((product) => String(product.id) === id);

    if (foundProductIndex === -1) throw new ProductNotFoundError(id);

    const updatedProduct = {
      id: products[foundProductIndex].id,
      ...productData,
    };

    products.splice(foundProductIndex, 1, updatedProduct);

    res.status(200).json(updatedProduct);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default putProduct;
