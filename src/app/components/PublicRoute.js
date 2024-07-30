import { useState } from "react";
import { toast } from "react-toastify";

const PublicRoute = () => {
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);

  const handleOnClick = async () => {
    try {
      const response = await fetch("https://saheb-api.vercel.app/products");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.statusText}`);
      }

      const data = await response.json();

      setProducts(data);

      setDisplay(true);
      toast.success("Data sukses diambil");
    } catch (error) {
      toast.error(`Failed to fetch data: ${error.message}`);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center w-full">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl">1. Mengakses Public Route</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">
              Melalui pengujian ini, kita akan memeriksa endpoint publik dari API Saheb. Endpoint publik dapat diakses tanpa autentikasi dan biasanya digunakan untuk mendapatkan data umum yang tidak sensitif. Contohnya termasuk mendapatkan
              daftar produk dan toko yang dapat diakses oleh siapa saja. Pada contoh kali ini akan menggunakan daftar produk.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0" onClick={handleOnClick}>
              <a className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                Ambil Data Produk
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {display && (
        <div className="flex flex-wrap justify-around">
          {products.products.slice(0, 10).map((product) => (
            <div className="w-[80%] h-[60vh] lg:h-[80vh] p-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-6" key={product.id}>
              <div className="h-[60%] lg:h-[65%] flex justify-center items-center">
                <img className="p-8 mx-auto w-[100%] h-[100%] rounded-t-lg object-cover cursor-pointer" src={product.image} alt={product.name} />
              </div>
              <div className="px-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h5>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <a className="text-[#001a9d] cursor-pointer">{product.storeName}</a>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">Stock: {product.stock}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 text-sm sm:text-md md:text-md lg:text-base font-semibold p-2 rounded">Rp {Intl.NumberFormat("id-ID").format(product.price)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PublicRoute;
