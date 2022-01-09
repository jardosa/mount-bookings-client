import { useRef } from "react";
import { useDestinationsQuery } from "../../generated/graphql";
import { DestinationThumbnail } from "./DestinationThumbnail";

const Destinations: React.FunctionComponent = () => {
  const { data, loading } = useDestinationsQuery();

  if (!data) {
    return null;
  }
  const {
    destinations: { nodes, totalCount },
  } = data;

  const destinations = nodes.map(DestinationThumbnail);

  return (
    <div>
      <p className="text-xl sm:text-3xl md:text-4xl">Destinations</p>
      <div className="w-full flex gap-5 flex-wrap justify-evenly my-10">
        {destinations}
      </div>
    </div>
  );
};

export default Destinations;
