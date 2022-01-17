import Image from "next/image";

interface DestinationHeroInterface<Details> {
  imgSrc?: string | null;
  title?: string;
  details: Details;
}

const DestinationHero = <Details,>({
  imgSrc,
  title = "Mt. Pulag",
  details,
}: DestinationHeroInterface<Details>) => {
  return (
    <div className="w-full h-[500px] relative flex justify-center items-center">
      <Image src={imgSrc ?? "/pulag.jpg"} layout="fill" />
      <div className="w-full  absolute h-full bg-gray-600 bg-opacity-40">
        <div className="w-full absolute flex items-center justify-end flex-col gap-10 p-10 h-full text-center ">
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationHero;
