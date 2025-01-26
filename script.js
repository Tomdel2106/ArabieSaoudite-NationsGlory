document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "NGAPI_!8mZ^p@cGL8yUrHhxPxXz9Fp$Bwm7(vs1b023cd64275680ac280b6e1397dea5c";

  const fetchCountryData = async (server, pseudo) => {
    try {
      const response = await fetch(`https://publicapi.nationsglory.fr/country/${server}/${pseudo.toLowerCase()}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données.");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const handleSearch = async () => {
    const pseudoInput = document.getElementById("pseudo").value;
    const serverSelect = document.getElementById("server").value;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results

    try {
      const countryData = await fetchCountryData(serverSelect, pseudoInput);

      // Display country data
      resultDiv.innerHTML = `
        <h2>Informations du pays :</h2>
        <p><strong>Pays :</strong> ${countryData.name}</p>
        <p><strong>Serveur :</strong> ${countryData.server}</p>
        <p><strong>Population :</strong> ${countryData.population}</p>
      `;
    } catch (error) {
      resultDiv.innerHTML = `<p style="color: red;">Erreur : ${error.message}</p>`;
    }
  };

  document.getElementById("searchButton").addEventListener("click", handleSearch);
});
