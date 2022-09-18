import axios from "axios";
import type { NextPage } from "next";
import { SWRConfig } from "swr";
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

// export const getServerSideProps = async () => {
//   const items = await axios.get("/api/items/getAllItems");

//   return {
//     props: {
//       fallback: {
//         "/api/items": items,
//       },
//     },
//   };
// };

export default Home;
