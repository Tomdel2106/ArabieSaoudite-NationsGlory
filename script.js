import React, { useState } from "react";
import NationsAPI from "nationsapi";

const apiKey = "NGAPI_!8mZ^p@cGL8yUrHhxPxXz9Fp$Bwm7(vs1b023cd64275680ac280b6e1397dea5c";

function App() {
  const [server, setServer] = useState("mocha");
  const [pseudo, setPseudo] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState("");

  async function handleFetch() {
    try {
      setError("");
      const api = new NationsAPI(apiKey);
      const data = await api.getCountry(server, pseudo.toLowerCase());
      setCountryData(data);
    } catch (err) {
      setError("Erreur : " + err.message);
      setCountryData(null);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Recherche de pays NationsGlory</h1>
      <div className="mb-4">
        <label className="block font-bold">Pseudo :</label>
        <input
          type="text"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold">Serveur :</label>
        <select
          value={server}
          onChange={(e) => setServer(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="mocha">Mocha</option>
          <option value="cyan">Cyan</option>
        </select>
      </div>
      <button
        onClick={handleFetch}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Rechercher
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {countryData && (
        <div className="mt-4 border p-4 rounded">
          <h2 className="text-lg font-bold">Données du pays :</h2>
          <p>Pays : {countryData.name}</p>
          <p>Serveur : {countryData.server}</p>
          <p>Population : {countryData.population}</p>
          {/* Ajoute d'autres données selon les besoins */}
        </div>
      )}
    </div>
  );
}

export default App;
