import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NationsGloryApp = () => {
  const [pseudo, setPseudo] = useState('');
  const [server, setServer] = useState('mocha');
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setPlayerData(null);
    try {
      const response = await axios.get(
        `https://publicapi.nationsglory.fr/country/${server}/${pseudo.toLowerCase()}`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer NGAPI_!8mZ^p@cGL8yUrHhxPxXz9Fp$Bwm7(vs1b023cd64275680ac280b6e1397dea5c',
          },
        }
      );
      setPlayerData(response.data);
    } catch (err) {
      setError('Erreur lors de la récupération des données. Vérifiez le pseudo et le serveur.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md p-4 bg-white shadow-md rounded-2xl">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Gestion de l'Arabie Saoudite</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Pseudo</label>
            <input
              type="text"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Entrez votre pseudo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Serveur</label>
            <select
              value={server}
              onChange={(e) => setServer(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="mocha">Mocha</option>
              <option value="cyan">Cyan</option>
            </select>
          </div>
          <Button onClick={handleSearch} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md">
            Rechercher
          </Button>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          {playerData && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Informations du joueur</h2>
              <p><strong>Pseudo :</strong> {playerData.name}</p>
              <p><strong>Pays :</strong> {playerData.country}</p>
              <p><strong>Serveur :</strong> {server}</p>
              {/* Ajoutez d'autres informations pertinentes */}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NationsGloryApp;
