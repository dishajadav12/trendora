'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

const NotFoundPage = () => {
    return ( 
    <div className="flex flex-col min-h-screen items-center justify-center">
    <Image
                    src="/images/trendora_logo.svg"
                    alt="trendora"
                    width={100}
                    height={100}
                    priority={true}
                  />
                  <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
                  <h1 className="text-custom-bk-blue-100 mb-4 text-2xl font-semibold">Not Found</h1>
                  <p className="text-destructive text-xs">Could not find requested page</p>
                  <Button variant='outline' className="mt-4 ml-2" onClick={()=>(window.location.href = '/')}>Back to Home</Button>
                  </div>
    </div> );
}
 
export default NotFoundPage;