import Head from "next/head";
import { useRouter } from "next/router";

import NavBar from "../components/NavigationBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { FloatButton } from "../components/FloatButton/FloatButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const MainLayout = ({ children, title = "USAstarsnails" }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>

      <NavBar />
      <SpeedInsights />

      <main style={{ marginTop: 100 }}>
        {children}
        <FloatButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
