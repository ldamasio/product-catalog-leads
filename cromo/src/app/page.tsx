import React from 'react';
import Caminhao from "@/components/Sections/Caminhao";
import Carro from "@/components/Sections/Carro";
import Moto from "@/components/Sections/Moto";
import Imovel from "@/components/Sections/Imovel";
import Lancha from "@/components/Sections/Lancha";

export default function Home() {

  return (
    <>
      <Caminhao />
      <Carro />
      <Moto />
      <Imovel />
      <Lancha />
    </>
  );
}
