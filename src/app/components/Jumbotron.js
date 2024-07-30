const Jumbotron = () => {
  return (
    <section className="bg-white  bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <a href="" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full ">
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">Click</span> <span className="text-sm font-medium">Kunjungi Dokumentasi REST API Saheb</span>
          <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Website Demo REST API Saheb</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
          Website ini dirancang untuk menunjukkan cara mengakses REST API Saheb dan menampilkan responsnya secara real-time. Melalui antarmuka yang sederhana dan intuitif, pengguna dapat melihat bagaimana data dari API Saheb diambil dan
          ditampilkan.
        </p>
      </div>
      <div className="bg-gradient-to-b from-blue-50 to-transparent  w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
};

export default Jumbotron;
