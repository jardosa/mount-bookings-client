import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layout/MainLayout";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../core/createApolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={createApolloClient()}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

export default MyApp;
