import type { NextPage } from "next";
import HomePage from "../components/HomePage/HomePage";
import Layout from "../layouts/Main";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default Home;
