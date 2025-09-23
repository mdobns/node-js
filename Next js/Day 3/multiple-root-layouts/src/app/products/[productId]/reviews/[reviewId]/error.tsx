"use client";
export default function ErrorPage( {error }: {error: Error}) {
    return <h1>{error.message}</h1>;
}
