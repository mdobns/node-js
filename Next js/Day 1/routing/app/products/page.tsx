import '../global.css'


export default function Products(){
    return(
        <>
        <h2 className="text-3xl font-semibold">List of Products</h2>
        <ul className="list-disc m-5  space-x-3">
        <li><a href="/products/1" className="no-underline text-blue-500">Product 1</a></li>
        <li><a href="/products/2" className=" no-underline">Product 2</a></li>
        <li><a href="/products/3" className=" no-underline">Product 3</a></li>
        <li><a href="/products/4" className=" no-underline">Product 4</a></li>
        </ul>
        </>
    )
}