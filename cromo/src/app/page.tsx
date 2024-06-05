import Image from "next/image";
import Header from '../components/Header';
import Caminhao from "@/components/Caminhao";
import Carro from "@/components/Carro";
import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Caminhao />
        <Carro />
      </main>
      <Footer />
    </>
  );
}
