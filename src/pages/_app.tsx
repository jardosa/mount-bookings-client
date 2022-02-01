import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layout/MainLayout";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../core/createApolloClient";
import { GlobalState } from "../utils/context/GlobalState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={createApolloClient()}>
      <GlobalState>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </GlobalState>
    </ApolloProvider>
  );
}

export default MyApp;
