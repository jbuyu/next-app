import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
function Search({ results }) {
  const router = useRouter();
//   console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || 0;
    console.log(context.query);
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_kEY}&cx=${process.env.REACT_APP_CONTEXT_kEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
