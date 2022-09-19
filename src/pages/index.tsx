import axios from "axios";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
import { fetcher } from "../../prisma/fetcher";
import styles from "../styles/Home.module.css";
import Top from "./components/Top";

const Home: NextPage = ({ fallback }: any) => {
  return (
    <div className={styles.container}>
      <SWRConfig value={fallback}>
        <Top />
      </SWRConfig>
    </div>
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
