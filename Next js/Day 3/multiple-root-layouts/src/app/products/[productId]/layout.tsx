import { renderToReadableStream } from "next/dist/server/app-render/entry-base";

function genRandom(count: number) {
  return Math.floor(Math.random()*count)
}
export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const random = genRandom(2);
  if (random === 1) {
    throw new Error("Error Loading product");
  }
    return <>
    {children}
    <h2>Featured products</h2>
    </>
}