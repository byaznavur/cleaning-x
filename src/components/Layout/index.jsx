import Footer from "../Footer";
import Header from "../Header";
import Intro from "./Intro";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
