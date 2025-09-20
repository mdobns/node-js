import { notFound } from "next/navigation";
export default async function Product({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const productId = (await params).productId;
  const reviewId = (await params).reviewId;
  if (parseInt(reviewId)>1000){
    notFound()
  }

  return (
    <h1>
      The details of product {productId} and review {reviewId}
    </h1>
  );
}
