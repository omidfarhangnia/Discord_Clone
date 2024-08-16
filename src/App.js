import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";
import SectionContainer from "./SectionContainer";

function Background({ children }) {
  return <div className="background-style w-full relative">{children}</div>;
}


export default function Website() {
  return (
    <>
      <Background>
        <NavBar />
        <Header />
        <SectionContainer />
        <Footer />
      </Background>
    </>
  );
}
