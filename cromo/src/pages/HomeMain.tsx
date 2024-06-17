import Caminhao from "@/components/Sections/Caminhao";
import Carro from "@/components/Sections/Carro";
import Moto from "@/components/Sections/Moto";
import Imovel from "@/components/Sections/Imovel";
import Lancha from "@/components/Sections/Lancha";

interface HomeMainProps {
}

const HomeMain: React.FC<HomeMainProps> = () => {
  return (
    <>
      <Caminhao />
      <Carro />
      <Moto />
      <Imovel />
      <Lancha />
    </>
  );
};

export default HomeMain;