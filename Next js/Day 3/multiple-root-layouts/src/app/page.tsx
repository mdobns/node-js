import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Main Page",
};

export default function Home(){
    return (
        <>
            <h1>Welcome Home! </h1>
            <Link href="/products">Go to Products</Link>
        </>
    );
        
}