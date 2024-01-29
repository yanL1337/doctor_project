import { useContext } from "react";
import PocketBase from "pocketbase";
import refreshContext from "../context/RefreshContext";

const TerminCard = ({ termin }) => {
  const pb = new PocketBase("https://doctorhub.pockethost.io");
  const refresher = useContext(refreshContext);
  const datum = new Date(termin.zeitpunkt).toLocaleString();
  const datumCorrect = datum.slice(0, datum.lastIndexOf(":"));

  const denyTermin = async () => {
    await pb.collection("termin").delete(termin.id);
    refresher((prev) => !prev);
    await fetch("http://127.0.0.1:1337/sendMail", {
      method: "POST",
      body: JSON.stringify({ email: termin.email, name: termin.name }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const acceptTermin = async () => {
    await pb.collection("termin").update(termin.id, { accepted: true });
    refresher((prev) => !prev);
  };

  return (
    <div
      className={`card  ${
        termin.accepted ? "bg-green-500" : "bg-neutral"
      } text-neutral-content`}
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">Termin</h2>
        <p>{`Name des Erstellers: ${termin.name}`}</p>
        <p>{`Datum und Uhrzeit: ${datumCorrect}`}</p>
        <div className="card-actions justify-end">
          <button onClick={acceptTermin} className="btn bg-green-400">
            Accept
          </button>
          <button onClick={denyTermin} className="btn bg-red-400">
            Deny
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerminCard;
