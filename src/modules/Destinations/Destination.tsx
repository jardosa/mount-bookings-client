import { useRouter } from "next/router";
import { useDestinationBySlugQuery } from "../../generated/graphql";

const Destination = () => {
  const router = useRouter();

  const { query } = router;
  const { data, loading } = useDestinationBySlugQuery({
    variables: { slug: query.slug as string },
  });

  return (
    <div>
      <div>Destination</div>
    </div>
  );
};

export default Destination;
