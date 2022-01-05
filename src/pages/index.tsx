import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { usePingQuery } from "../generated/graphql";
import Home from "../modules/Home";

const HomePage: NextPage = () => <Home />;
export default HomePage;
