"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";


export default function ErrorPage( {error, reset }: {error: Error, reset: () => void}) {
    const router = useRouter();
    const handleClick = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    };

    return (
        <>
        
        <h1>{error.message}</h1>
        <button onClick={handleClick}>Try again</button>
        </>
    )
}