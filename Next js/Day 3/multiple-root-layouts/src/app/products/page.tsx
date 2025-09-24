import Link from 'next/link';


import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products Page",
};



export default function Products(){
    const productIds = [10, 20, 30, 40];
    return(
        <>
        <h2 className="text-3xl font-semibold">List of Products</h2>
        <ul className="list-disc m-5  space-x-3">
        <li><Link href="/products/1">Product 1</Link></li>
        <li><Link href="/products/2">Product 2</Link></li>
        <li><Link href="/products/3">Product 3</Link></li>
        <li><Link href="/products/4" replace>Product 4</Link></li> 
        {productIds.map((productId) => (
        <li key={productId}><Link href={`/products/${productId}`}>Product {productId}</Link></li>
      ))}
        
        </ul>
        <Link href="/">Go to Home</Link>
        </>
    )
}