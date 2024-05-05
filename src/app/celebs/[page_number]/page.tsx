import Link from "next/link";
import CelebCard from "@/app/Components/CelebCard";

interface form {
  _id: string;
  view_count: number;
  link: string;
  image_link: string;
  hashtag: string;
}

const Celebs = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:3210/api/popularActresses/${params.page_number}`,
    {
      cache: "no-cache",
    }
  );
  const celebs: form[] = await res.json();

  return (
    <div>
      <div className="text-sm breadcrumbs mb-5">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/celebs">Celebs</Link>
          </li>
          <li>
            <Link href={`/celebs${params.page_number}`}>
              {params.page_number}
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {celebs.map((celeb: any) => (
          <CelebCard key={celeb._id} celebCard={celeb}></CelebCard>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center my-5">
        <div className="join">
          <Link href="/celebs/1">
            <button className="join-item btn">1</button>
          </Link>
          <Link href="/celebs/2">
            <button className="join-item btn">2</button>
          </Link>
          <button className="join-item btn btn-disabled">...</button>
          <Link href="/celebs/99">
            <button className="join-item btn">99</button>
          </Link>
          <Link href="/celebs/100">
            <button className="join-item btn">100</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Celebs;
