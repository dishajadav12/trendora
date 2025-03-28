import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="px-20">
      <h2 className="text-2xl my-10">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData &&
            limitedData.map((product: Product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
        </div>
      ) : (
        <div>
          <p>No data</p>
        </div>
      )}
    </div>
  );
};
 
export default ProductList;