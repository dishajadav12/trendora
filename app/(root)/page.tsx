import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  const formattedProducts = latestProducts.map(product => ({
    ...product,
    price: product.price.toString(),
    rating: Number(product.rating),
  }));
  return (
    <>
      <ProductList title="New Arrivals" data={formattedProducts} />
    </>
  );
}
 
export default HomePage;