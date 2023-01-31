import Image from "next/image";

type Props = {
  imgUrl: string;
};

const Thumb = ({ imgUrl }: Props) => (
  <Image
    placeholder="blur"
    blurDataURL="/placeholder.jpg"
    fill
    className="rounded-lg object-cover "
    src={imgUrl}
    alt="thumb-img"
  />
);

export default Thumb;
