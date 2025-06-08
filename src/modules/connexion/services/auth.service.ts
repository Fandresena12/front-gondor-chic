export const login = async (identifier: string): Promise<boolean> => {
  // Simule une requête d'API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Tentative de connexion avec: ${identifier}`);
      // Logique de simulation: la connexion réussit si l'identifiant n'est pas vide
      if (identifier && identifier.length > 0) {
        resolve(true); // Connexion réussie
      } else {
        resolve(false); // Connexion échouée
      }
    }, 1000); // Simule un délai réseau
  });
};
