import Image from "next/image";

interface form {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Props {
  celebCard: form;
}

const CelebCard = ({ celebCard }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-3">
      <figure>
        <Image
          src={celebCard.url}
          alt={celebCard.title}
          width={200}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
          {celebCard.title}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Nude</div>
          <div className="badge badge-outline">Boobs</div>
        </div>
      </div>
    </div>
  );
};

export default CelebCard;
