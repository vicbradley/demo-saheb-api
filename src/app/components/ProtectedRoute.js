import { toast } from "react-toastify";

const ProtectedRoute = () => {

  const handleOnClick = async () => {
    try {
      const response = await fetch("https://saheb-api.vercel.app/users/TouJ4pVdzMRDlJZBB5beRU6IvFQ2");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.statusText}`);
      }

      const data = await response.json();

      toast.success(`Data retrieved: ${JSON.stringify(data)}`);
    } catch (error) {
      toast.error(`Failed to fetch data: ${error.message}`);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center w-full">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-600 md:text-5xl lg:text-6xl">2. Mengakses Protected Route</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">
              Dalam pengujian ini, kita akan memverifikasi akses ke endpoint yang memerlukan autentikasi. Endpoint terproteksi ini hanya dapat diakses oleh pengguna yang memiliki token autentikasi yang valid. Pengujian ini penting untuk
              memastikan bahwa data sensitif hanya dapat diakses oleh pengguna yang berwenang. Pada contoh kasus ini, kita akan mencoba mengakses data pengguna tanpa menyertakan token autentikasi, yang akan menghasilkan pesan kesalahan.
              Token autentikasi hanya dapat diperoleh dengan login terlebih dahulu di website Saheb. Protected routes ini dirancang khusus untuk diakses hanya melalui website Saheb.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0" onClick={handleOnClick}>
              <a className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                Ambil Data Pengguna
                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProtectedRoute;
