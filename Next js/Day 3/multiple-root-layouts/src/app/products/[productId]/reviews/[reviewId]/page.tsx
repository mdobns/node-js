import { notFound } from "next/navigation";

// function genRandom(count: number) {
//   return Math.floor(Math.random()*count)
// }

export default async function Product({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  //  const random = genRandom(2);
   

  // if (random === 1) {
  //   throw new Error("Failed to fetch product details");
  // }
  if (parseInt(reviewId)>1000){
    notFound()
  }

  return (
    
    <h1>
      The details of product {productId} and review {reviewId}
    </h1>
  );
}
