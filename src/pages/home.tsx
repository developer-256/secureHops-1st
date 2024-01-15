import Header from "../components/header";
import MainImg from "../components/MainImg";
import Grid from "../components/grid";
import BanUnderGrid from "../components/BanUnderGrid";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Header />
      <MainImg />
      <Grid />
      <BanUnderGrid />
      <Footer />
    </div>
  );
}

export default Home;
