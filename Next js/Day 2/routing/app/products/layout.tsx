import { renderToReadableStream } from "next/dist/server/app-render/entry-base";

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return <>
    {children}
    <h2>Featured products</h2>
    </>
}