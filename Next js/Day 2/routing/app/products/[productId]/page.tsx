export default async function Product( {params }:{params : Promise<{ productId: string}>})
    {
        const productId = (await params).productId
    
    return <h1>The details of product {productId}</h1>
}