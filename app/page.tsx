import Image from "next/image";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Container from "./components/container/container";
import Category from "./components/category/category";

export default function Home() {
  return (
    <div className="w-screen">
      <Header />
      <Container>

        <Hero />
        <Category />
      </Container>

    </div>
  );
}
