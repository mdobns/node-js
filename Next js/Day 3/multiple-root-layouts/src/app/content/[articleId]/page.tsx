"use client";
import Link from "next/link";
import { use } from "react";
export default function ArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
  return (
    <>
      <h1>Article Page in {lang}</h1>
      <p>This is a specific {articleId} page.</p>
      <div>
        <Link href={`/content/${articleId}?lang=en`}>Go to Article in EN</Link>
      </div>

      <div>
        <Link href={`/content/${articleId}?lang=fr`}>Go to Article in FR</Link>
      </div>
    </>
  );
}

// import Link from "next/link";
// export default async function ArticlePage({params, searchParams}:
// {
//     params : Promise <{articleId: string}>,
//     searchParams: Promise <{lang?: 'en' | 'fr'} >
// }
// ) {
//     const {articleId}= await params;
//     const {lang = 'en'} = await searchParams
//     return (

//         <>
//             <h1>Article Page in {lang}</h1>
//             <p>This is a specific {articleId} page.</p>
//             <Link href={`/content/${articleId}?lang=en`}>Go to Article in EN</Link>
//             <Link href={`/content/${articleId}?lang=fr`}>Go to Article in FR</Link>
//         </>
//     );
// }
