import Image from "next/image";

interface form {
  _id: string;
  view_count: number;
  link: string;
  image_link: string;
  hashtag: string;
}

interface Props {
  celebCard: form;
}

function simplifyNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
}

const CelebCard = ({ celebCard }: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-3">
      <figure>
        <Image
          src={celebCard.image_link}
          alt={celebCard._id}
          width={144}
          height={200}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {celebCard._id}
          <div className="badge badge-primary">
            {simplifyNumber(celebCard.view_count)}
          </div>
        </h2>
        <a className="link link-primary" href={celebCard.link} target="_blank">
          {celebCard._id}
        </a>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">#{celebCard.hashtag}</div>
        </div>
      </div>
    </div>
  );
};

export default CelebCard;
