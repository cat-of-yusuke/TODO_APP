import axios from "axios";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { fetcher } from "../../prisma/fetcher";
import Top from "./components/Top";

const Home: NextPage = ({ fallback }: any) => {
  return (
    <>
      <SWRConfig value={fallback}>
        <Top />
      </SWRConfig>
    </>
  );
};

export const getServerSideProps = async () => {
  const items = await fetcher("http://localhost:3000/api/item/fetchAllItems");

  return {
    props: {
      fallback: {
        "/api/item": items,
      },
    },
  };
};

export default Home;
