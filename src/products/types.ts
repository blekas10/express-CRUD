export type ProductModel = {
  id: number,
  title: string,
  description: string,
  images: string[],
  price: number,
  rating: number
};

export type ProductData = Omit<ProductModel, 'id'>;

export type PartialProductData = Partial<ProductData>;

export type ProductDataBody = PartialRecursive<ProductData>;
