import Link from "next/link";

export default function F1(){
    return (<>
            <h1 className="text-2xl font-bold text-red-800">
                This is F1 page
            </h1>
            <Link href="/f1/f2">Go to F2</Link>
            <Link href="/profile">Go to Profile</Link>
    </>);
}