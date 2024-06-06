import Image from "next/image";
import Header from '../components/Header';
import Caminhao from "@/components/Caminhao";
import Carro from "@/components/Carro";
import Moto from "@/components/Moto";
import Imovel from "@/components/Imovel";
import EnergiaRenovavel from "@/components/EnergiaRenovavel";
import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Caminhao />
        <Carro />
        <Moto />
        <Imovel />
        <EnergiaRenovavel />
      </main>
      <Footer />
    </>
  );
}
