'use client';

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({images}: {images: string[]}) => {
   const [current, setCurrent] = useState(0);
   return (
     <div className="space-y-4 mt-10 ">
       <Image
         src={images[current]}
         alt="product image"
         width={400}
         height={400}
         className="min-h-[300px] object-cover object-center"
       />
       <div className="flex gap-4 items-center">
         {images.map((image, index) => (
           <div
             key={index}
             onClick={() => setCurrent(index)}
             className={`cursor-pointer hover:border-bk-blue-200 ${
               index === current ? "border-2 border-bk-blue-300" : ""
             }`}
           >
             <Image
               src={image}
               alt="product image"
               width={80}
               height={80}
               className="min-h-[100px] object-cover object-center "
             />
           </div>
         ))}
       </div>
     </div>
   );
}
 
export default ProductImages;