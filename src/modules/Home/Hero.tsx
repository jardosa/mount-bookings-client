import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[500px] relative flex justify-center items-center ">
      <Image src="/pulag.jpg" layout="fill" />
      <div className="w-full  absolute h-full bg-gray-600 bg-opacity-70">
        <div className="w-full absolute flex items-center justify-center flex-col gap-10 p-10 h-full text-center ">
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 ">
            WELCOME TO PHILIPPINE MOUNTAINS!
          </div>
          <div className="text-base sm:text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            temporibus, eum perspiciatis odit suscipit totam ex et sit quisquam,
            inventore dolorum placeat ad hic natus corporis laborum! Voluptatum
            repellat distinctio, praesentium quae, tempora, repudiandae nostrum
            exercitationem hic ut voluptatibus odio.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
