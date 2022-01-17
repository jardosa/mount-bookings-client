import { useRouter } from "next/router";
import { useDestinationBySlugQuery } from "../../generated/graphql";
import DestinationHero from "./DestinationHero";

const Destination = () => {
  const router = useRouter();
  console.log(router.asPath);

  const { query } = router;
  const { data, loading } = useDestinationBySlugQuery({
    variables: { slug: query.slug as string },
  });

  if (loading) {
    return null;
  }

  if (!data?.destinationBySlug) {
    return null;
  }

  return (
    <div className="w-full">
      <DestinationHero
        imgSrc={data?.destinationBySlug?.imageUrl}
        details={data.destinationBySlug}
      />
      <div className="w-fit mx-auto my-10">
        <button
          onClick={() => router.push(`${router.asPath}/reservation`)}
          type="button"
          className="bg-green-400 p-5 rounded-lg shadow-lg hover:bg-opacity-70 duration-100 text-white text-xl"
        >
          SCHEDULE A RESERVATION
        </button>
      </div>
      <div className="w-full text-lg leading-loose sm:w-3/4 md:w-1/2 my-10 mx-auto">
        <p>
          Mount Pulag (Filipino: Bundok Pulag; Ilocano: Bantay Pulag) is Luzon's
          highest peak at 2,928 metres (9,606 ft) above sea level, third-highest
          mountain in the Philippines, and the 26th-highest peak of an island on
          Earth. It is second-most prominent mountain in the Philippines, it is
          a dormant volcano. Located on the triple border of the provinces of
          Benguet, Ifugao, and Nueva Vizcaya, the borders meet at the mountain's
          peak. Mount Pulag is third highest next to Mount Apo and Mount
          Dulang-dulang.
        </p>
        <p>
          Mount Pulag is famous for its "sea of clouds" and its exceptional view
          of the Milky Way Galaxy at dawn, which has attracted many tourists who
          wish to see the "other-worldly" scenery.
        </p>
        <p>
          The entire mountain is believed to be the home to the tinmongao
          spirits and is the sacred resting ground of the souls of the Ibaloi
          people and other ethnic peoples in the area.
        </p>
      </div>
    </div>
  );
};

export default Destination;
