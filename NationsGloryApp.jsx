import React, { useState } from "react";
import NationsAPI from "nationsapi";

const apiKey = "NGAPI_!8mZ^p@cGL8yUrHhxPxXz9Fp$Bwm7(vs1b023cd64275680ac280b6e1397dea5c";

function NationsGloryApp() {
  const [server, setServer] = useState("mocha");
  const [pseudo, setPseudo] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  const fetchCountryData = async () => {
    try {
      setError(null);
      setCountryData(null);

      // Initialize NationsAPI client
      const api = new NationsAPI(apiKey);

      // Fetch country data
      const data = await api.getCountry(server, pseudo.toLowerCase());
      setCountryData(data);
    } catch (err) {
      setError("Erreur lors de la récupération des données. Veuillez vérifier le pseudo ou le serveur.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestion de l'Arabie Saoudite - NationsGlory</h1>

      <div className="mb-4">
        <label className="block font-medium">Pseudo :</label>
        <input
          type="text"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Entrez votre pseudo"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Serveur :</label>
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
        onClick={fetchCountryData}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Rechercher
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {countryData && (
        <div className="mt-4 p-4 border rounded shadow">
          <h2 className="text-lg font-bold">Informations du pays :</h2>
          <p><strong>Pays :</strong> {countryData.name}</p>
          <p><strong>Serveur :</strong> {countryData.server}</p>
          <p><strong>Population :</strong> {countryData.population}</p>
          {/* Ajoute d'autres informations si nécessaire */}
        </div>
      )}
    </div>
  );
}

export default NationsGloryApp;
