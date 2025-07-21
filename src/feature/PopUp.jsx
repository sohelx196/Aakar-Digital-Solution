import { useState, useEffect } from "react";

function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white  p-8 rounded-lg shadow-lg text-center w-[90%] max-w-md">
        <h2 className="font-saira text-3xl font-bold text-yellow-500 outline-dotted mb-4"> New Arrival !</h2>
        <p className="text-gray-700 mb-4 text-2xl font-cabin">Aakar Prakashan has officially launched.</p>
        
        <button
          onClick={() => setShow(false)}
          className="mx-5 font-cabin mt-2 px-4 py-2 border border-black text-black rounded hover:bg-slate-100 transition">
           Close
        </button>

    

      </div>
    </div>
  );
}

export default Popup;
