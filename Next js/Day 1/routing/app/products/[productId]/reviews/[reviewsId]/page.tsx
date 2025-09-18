export default async function Product( {params }:{
    params : Promise<{ productId: string, reviewsId: string}>
})
    {
        const { productId, reviewsId } = await params;

    return <h1>The details of product {productId} and review {reviewsId}</h1>
}