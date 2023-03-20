import { RequestHandler } from 'express';
import { products } from 'products/data';
import { ProductDataBody, ProductModel } from 'products/types';
import productDataValidationSchema from 'products/validation-schemas/product-data-validation-schema';
import createId from 'helpers/create-id';
import handleRequestError from 'helpers/handle-request-error';

const createProduct: RequestHandler<
  {},
  ProductModel | ErrorResponse,
  ProductDataBody,
  {}
> = (req, res) => {
  try {
    const houseData = productDataValidationSchema.validateSync(req.body, { abortEarly: false });
    const createdHouse = { id: createId(), ...houseData };
    products.push(createdHouse);

    res.status(201).json(createdHouse);
  } catch (err) {
    handleRequestError(err, res);
  }
};

export default createProduct;
