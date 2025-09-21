import '../global.css'

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products Page",
};


export default function Products(){
    return(
        <>
        <h2 className="text-3xl font-semibold">List of Products</h2>
        <ul className="list-disc m-5  space-x-3">
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
        </ul>
        </>
    )
}