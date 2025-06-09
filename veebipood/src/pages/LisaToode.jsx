import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import tootedFailist from "../data/tooted.json";

function LisaToode() {
  //const nimiRef = useRef();
  // const [sonum, setSonum] = useState("");
  const [toode, setToode] = useState({});

  const lisa = () => {
    // if (nimiRef.current.value === "") {
    //   setSonum("Nimi puudu!");
    // } else {
    //   setSonum("Toode lisatud: " + nimiRef.current.value);
    // }

    // nimiRef.current.value === "" ?
    //   setSonum("Nimi puudu!") :
    //   setSonum("Toode lisatud!");

    if (toode.nimi === undefined || toode.nimi === "") {
      toast.error("Nimi puudu!");
      return; // return lõpetab funktsiooni
    }

    if (toode.hind === undefined || toode.hind === "") {
      toast.error("Hind puudu!");
      return; // return lõpetab funktsiooni
    }

    if (toode.pilt === undefined || toode.pilt === "") {
      toast.error("Pilt puudu!");
      return; // return lõpetab funktsiooni
    }

    if (toode.nimi.length < 5) {
      toast.error("Nimi liiga lühike!");
      return; // return lõpetab funktsiooni
    }

    if (toode.nimi[0] === toode.nimi[0].toLowerCase()) {
      toast.error("Nimi peab algama suure tähega!");
      return; // return lõpetab funktsiooni
    }
    
    toast.success("Toode lisatud: " + toode.nimi);
    tootedFailist.push(toode);
  }

  return (
    <div>
      <div>{JSON.stringify(toode)}</div>
      {/* <div>{sonum}</div> */}
      <label>Toote nimi</label> <br />
      <input onChange={(e) => setToode({...toode, "nimi": e.target.value})} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input onChange={(e) => setToode({...toode, "hind": e.target.value})} type="number" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input onChange={(e) => setToode({...toode, "aktiivne": e.target.checked})} type="checkbox" /> <br />
      <label>Toote pilt</label> <br />
      <input onChange={(e) => setToode({...toode, "pilt": e.target.value})} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default LisaToode