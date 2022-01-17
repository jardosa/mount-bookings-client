import Head from "next/head";
import { usePingQuery } from "../../generated/graphql";
import Hero from "./Hero";

const Home: React.FunctionComponent = () => {
  const { data } = usePingQuery();
  return (
    <>
      <Head>
        <title>Philippine Mountains</title>
        <meta name="description" content="philippine mountains" />
        <link rel="icon" href="/yta.jpg" />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
