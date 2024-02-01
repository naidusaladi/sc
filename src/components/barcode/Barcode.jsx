import React,{useState} from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";


const Barcode = () => {
    const [data, setData] = useState("Not Found");
    const [stopStream, setStopStream] = useState(false)
    const dismissQrReader = () => {
    // Stop the QR Reader stream (fixes issue where the browser freezes when closing the modal) and then dismiss the modal one tick later
    setStopStream(true)
    setTimeout(() => closeModal(), 0)
    }
  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          // else setData("Not Found");
        }}
        stopStream={stopStream}
      />
      <p>{data}</p>
      <button onClick={dismissQrReader}>submit</button>

    </>
  )
}

export default Barcode
