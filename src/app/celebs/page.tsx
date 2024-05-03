import Link from "next/link";
import CelebCard from "../Components/CelebCard";

interface form {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Celebs = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const celebs: form[] = await res.json();
  const truncated_data = celebs.slice(0, 10);

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
        </ul>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {truncated_data.map((celeb: any) => (
          <CelebCard key={celeb.id} celebCard={celeb}></CelebCard>
        ))}
      </div>
    </div>
  );
};

export default Celebs;
