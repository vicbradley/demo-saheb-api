import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ index, transactionId, onTransactionComplete }) => {
  const [recipientName, setRecipientName] = useState("");
  const [shipmentProof, setShipmentProof] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      transactionId,
      recipientName,
      shipmentProof,
    };

    try {
      const response = await fetch(`https://saheb-api.vercel.app/transactions/${transactionId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.statusText}`);
      }

      const result = await response.json();

      toast.success("Transaksi berhasil diselesaikan");
      onTransactionComplete(); // Panggil callback untuk merender ulang data transaksi
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <p className="text-blue-600 font-semibold hover:underline cursor-pointer" onClick={() => document.getElementById(`my_modal_${index}`).showModal()}>
        Selesaikan Pesanan
      </p>
      <dialog id={`my_modal_${index}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Lengkapi Data Pengiriman</h3>
          <div className="modal-action mt-0 flex flex-col space-y-4 ">
            <label className="form-control w-full max-w-xs  ml-2">
              <div className="label">
                <span className="label-text">Nama Penerima</span>
              </div>
              <input type="text" placeholder="Nama Penerima" className="input input-bordered input-sm w-full max-w-xs" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} />
            </label>

            <label className="form-control w-full max-w-xs  ml-2">
              <div className="label">
                <span className="label-text">Bukti Pengiriman</span>
              </div>
              <input type="text" placeholder="Link Gambar" className="input input-bordered input-sm w-full max-w-xs" value={shipmentProof} onChange={(e) => setShipmentProof(e.target.value)} />
            </label>

            <form onSubmit={handleSubmit} method="dialog">
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Form;
