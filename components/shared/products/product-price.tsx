import { cn } from "@/lib/utils";

const ProductPrice = ({value, className} : {value: number, classname?: string }) => {
   const stringValue = value.toFixed(2);
   const [intValue, floatValue] = stringValue.split(".");
   return (
     <div>
       <p className={cn("text-2xl", className)}>
         <span className="text-xs align-super">$</span>
         {intValue}
         <span className="text-xs align-super">.{floatValue}</span>
       </p>
     </div>
   );
}
 
export default ProductPrice;