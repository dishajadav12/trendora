import ProductCard from "./product-card";

const ProductList = ({data, title, limit}:{data:any; title?: string; limit?: number}) => {
    const limitedData = limit ? data.slice(0, limit) : data;
    return (
      <div>
        <h2 className="text-2xl my-10">{title}</h2>
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {limitedData.map((product: any) => (

              <ProductCard key={product.slug} product={product} />))}
          </div>
        ) : (
          <div>
            <p>No data</p>
          </div>
        )}
      </div>
    );
}
 
export default ProductList;