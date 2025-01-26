document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const pseudo = document.getElementById('pseudo').value;
    const server = document.getElementById('server').value;

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
        const data = await response.json();
        document.getElementById('result').innerHTML = `<p>Pays : ${data.country}</p>`;
    } catch (err) {
        document.getElementById('result').innerHTML = `<p>Erreur : ${err.message}</p>`;
    }
});
