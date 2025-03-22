export type Product = {
  name: string | null;
  slug: string | null;
  category: string | null;
  description: string | null;
  images: string[] | null;
  price: number | null;
  brand: string | null;
  rating: number | null;
  numReviews: number | null;
  stock: number | null;
  isFeatured: boolean | null;
  banner: string | null;
};
