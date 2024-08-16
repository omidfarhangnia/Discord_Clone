import Header from "./Header";
import NavBar from "./Navbar";
import SectionContainer from "./SectionContainer";

function Background({ children }) {
  return <div className="background-style w-full relative">{children}</div>;
}

function Boody() {
  return <header className="h-[400vh] w-full"></header>;
}

export default function Website() {
  return (
    <>
      <Background>
        <NavBar />
        <Header />
        <SectionContainer />
      </Background>
    </>
  );
}
