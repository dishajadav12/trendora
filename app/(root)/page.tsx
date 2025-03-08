import ProductList from "@/components/shared/products/product-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  return ( <>
  <ProductList title="new" data={sampleData.products}/>
  </> );
}
 
export default HomePage;