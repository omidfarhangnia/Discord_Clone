import NavBar from "./Navbar";

function Background({ children }) {
  return <div className="background-style w-full">{children}</div>;
}



function Header() {
  return <header className="h-[400vh] w-full">lgllg</header>;
}

export default function Website() {
  return (
    <>
      <Background>
        <NavBar />
        <Header />
      </Background>
    </>
  );
}
