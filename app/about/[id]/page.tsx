import React from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { fetchData } from "~/hooks/fetch-data";
const ProductView = ({ params }: { params: { id: number } }) => {
//   const { data } = useQuery(["productsID"], () =>
//     fetchData({
//       url: `https://6605705d2ca9478ea1804f1b.mockapi.io/data/id=${params.id}`,
//     })
//   );
  return (
    <>
      <div className="container">
        <div className="mt-10">my post ID:{params.id}</div>
        <Link className="mt-2 text-blue-600" href={"/"}>
          Home
        </Link>
      </div>
    </>
  );
};

export default ProductView;

// export async function generateStaticParams() {
//   const posts = await fetch(
//     "https://6605705d2ca9478ea1804f1b.mockapi.io/data"
//   ).then((res) => res.json());
//   return posts.map((post: { slug: string }) => ({
//     slug: post.slug,
//   }));
// }
