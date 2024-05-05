import Link from "next/link";
import CelebCard from "@/app/Components/CelebCard";

interface celeb {
  _id: string;
  view_count: number;
  link: string;
  image_link: string;
  hashtag: string;
}

interface count {
  count: any;
}

const Celebs = async ({ params }: any) => {
  const res_celebs = await fetch(
    `http://localhost:3210/api/popularActresses/${params.page_number}`,
    {
      cache: "no-cache",
    }
  );

  const res_count = await fetch("http://localhost:3210/uniqueActressCount", {
    cache: "no-cache",
  });
  const celebs: celeb[] = await res_celebs.json();
  const celeb_count: count = await res_count.json();

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
          <Link href={`/celebs/${Math.floor(celeb_count.count / 30)}`}>
            <button className="join-item btn">
              {Math.floor(celeb_count.count / 30)}
            </button>
          </Link>
          <Link href={`/celebs/${Math.floor(celeb_count.count / 30 + 1)}`}>
            <button className="join-item btn">
              {Math.floor(celeb_count.count / 30 + 1)}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Celebs;
