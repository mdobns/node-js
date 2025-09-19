"use client";
import { usePathname } from "next/navigation";
export default function NotFound(){
    const pathname =  usePathname()
    const productId = pathname.split('/')[2] 
    const reviewId = pathname.split('/')[4]
    return (
        <div className="flex items-center justify-center grid ">
            <h2 className='text-5xl'>Review no {reviewId} is not found for product {productId} </h2>
            <p className='text-2xl'>Could not find the requested review</p>
        </div>
    );
}