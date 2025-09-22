import { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ( {params}: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const name = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`);
        }, 100);
    });
    return {
        title: `Product ${name}`,
    };
}

export default async function Product({ params }: Props) {
  const productId = (await params).productId;

  return <h1>The details of product {productId}</h1>;
}
