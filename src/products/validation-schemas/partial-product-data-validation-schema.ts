import { PartialProductData } from 'products/types';
import * as yup from 'yup';

const partialProductDataValidationSchema: yup.ObjectSchema<PartialProductData> = yup.object({
  title: yup.string()
    .min(2, 'title must have at least 2 letters')
    .max(32, 'title can\'t have more than 32 letters'),

 description: yup.string()
    .required('description is required')
    .min(2, 'description must have at least 2 letters')
    .max(164, 'description can\'t have more than 32 letters'),

  images: yup
    .array(yup.string().required()),

  price: yup.number()
    .positive('price must be positive')
    .test(
      'priceFormat',
      'price can\'t have more than 2 decimal points',
      (value) => value === undefined || Number(value.toFixed(2)) === value,
    ),

  rating: yup.number()
    .positive('rating must be positive')
    .min(1, 'rating must be at least 1')
    .max(5, 'rating can\'t be more than 5'),
}).strict(true);

export default partialProductDataValidationSchema;
