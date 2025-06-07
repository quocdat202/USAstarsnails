import Head from "next/head";
import { useRouter } from "next/router";

import NavBar from "../components/NavigationBar/NavBar";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const ErrorPage = ({ children, title = "USAstarsnails" }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>Page not found &mdash; {title}</title>
      </Head>

      <NavBar />

      <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
    </div>
  );
};

export default ErrorPage;
