"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct(){
    const router = useRouter();
    const submit = () => {
        console.log("Order Placed");
        router.push('/');
    }
    return(
         <>
         <h1>Order Product</h1>
         <button onClick={submit}>Place Order</button>
         </>
    )
}