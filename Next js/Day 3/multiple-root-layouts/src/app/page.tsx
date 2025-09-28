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
            <Link href="/about">Go to About</Link>

            <Link href={"/content/article-123?lang=en"}>Go to Article in EN</Link>
            <Link href={"/content/article-123?lang=fr"}>Go to Article in FR</Link>
            <Link href={"/photo-feed"}>Go to Photo Feed</Link>
        </>
    );
        
}