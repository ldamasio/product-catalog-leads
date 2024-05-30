import Image from "next/image";
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <div className="m-8 p-8">
          <div className="grid grid-cols-3 gap-4">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
