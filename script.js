try {
  const response = await fetch(
    `https://publicapi.nationsglory.fr/country/${server}/${pseudo.toLowerCase()}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer NGAPI_!8mZ^p@cGL8yUrHhxPxXz9Fp$Bwm7(vs1b023cd64275680ac280b6e1397dea5c',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data);
  document.getElementById('result').innerHTML = `<p>Pays : ${data.country}</p>`;
} catch (err) {
  console.error(err);
  document.getElementById('result').innerHTML = `<p>Erreur : ${err.message}</p>`;
}
