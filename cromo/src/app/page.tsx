import Image from "next/image";
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import Caminhao from "@/components/Caminhao";
import Carro from "@/components/Carro";
import Produtos from "@/components/Produtos";
import Banner from "@/components/Banner";
import Volks from "@/components/Volks";
import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Caminhao />
        <Carro />
        {/* <Banner /> */}
        {/* <Volks /> */}
      </main>
      <Footer />
    </>
  );
}
