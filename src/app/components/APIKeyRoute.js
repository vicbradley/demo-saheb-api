import { useState } from "react";
import Form from "./Form";
import { toast } from "react-toastify";

const APIKeyRoute = () => {
  const [display, setDisplay] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("https://saheb-api.vercel.app/transactions/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.statusText}`);
      }

      const data = await response.json();

      const filteredTransactions = data.filter((transaction) => transaction.status === "Dikirim");

      setTransactions(filteredTransactions);
      setDisplay(true);
      toast.success("Data sukses diambil");
    } catch (error) {
      toast.error(`Failed to fetch data: ${error.message}`);
    }
  };

  const handleOnClick = () => {
    fetchTransactions();
  };

  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center w-full">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl">3. Mengakses Endpoint dengan API Key</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
              Pengujian ini bertujuan untuk memverifikasi akses ke endpoint yang memerlukan API key untuk autentikasi. Fokus dari pengujian ini adalah pada penggunaan API key untuk mengakses endpoint API Saheb dari aplikasi pihak ketiga.
              API key adalah metode autentikasi yang digunakan untuk memverifikasi identitas aplikasi atau pengguna yang mengirimkan permintaan ke API. Dalam konteks aplikasi pihak ketiga, API key sering digunakan untuk mengontrol akses
              serta melacak penggunaan API. Pengujian akan dilakukan dengan melakukan simulasi pengiriman produk berdasarkan transaksi.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300" onClick={handleOnClick}>
                Ambil Data Transaksi
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div>
        {display && (
          <div className="w-[95%] mx-auto p-3 mb-3 bg-white border border-gray-200 rounded-lg shadow">
            <div className="mb-2">
              <p className="text-lg lg:text-2xl font-bold">Daftar Transaksi</p>
            </div>

            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className="bg-base-200">
                    <th>Id Transaksi</th>
                    <th>Daftar Produk</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Total Harga</th>
                    <th></th>
                    <th>Id Pemesan</th>
                    <th>Alamat</th>
                    <th>Nomor Telepon</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr className="hover" key={transaction.transactionId}>
                      <td>{transaction.transactionId}</td>
                      <td colSpan={4}>
                        <div>
                          {transaction.products.map((product, index) => (
                            <div key={index} className="mt-1">
                              {index + 1}. {product.name}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td colSpan={2}>Rp. {Intl.NumberFormat("id-ID").format(transaction.totalPrice)}</td>
                      <td>{transaction.userId}</td>
                      <td>{transaction.address}</td>
                      <td>{transaction.phoneNumber}</td>
                      <td>
                        <Form index={index} transactionId={transaction.transactionId} onTransactionComplete={fetchTransactions} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default APIKeyRoute;
