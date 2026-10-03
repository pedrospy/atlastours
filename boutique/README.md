# Maison Céleste — stock et paie

Outil de comptoir pour une boutique de vêtements : catalogue, stock par taille et couleur, mouvements, alertes, heures et estimations de paie.

Les montants de paie sont des **estimations de gestion**. Ce n’est pas un bulletin de paie officiel.

## Lancer

Depuis la racine du dépôt, une seule commande (Node.js 22.13 ou plus récent, aucune installation) :

```bash
node --disable-warning=ExperimentalWarning boutique/server.js
```

Puis ouvrir http://localhost:3040

Le port peut être changé avec `PORT=3050 node --disable-warning=ExperimentalWarning boutique/server.js`.

Depuis le dossier `boutique`, `npm start` lance la même chose.

## Données

Tout est enregistré dans `boutique/data/maison-celeste.sqlite`. Un rafraîchissement ne vide pas la boutique. Au premier démarrage, un jeu de démonstration (pièces, mouvements, équipe, estimation de septembre) est chargé.

Pour repartir de ce jeu : arrêter l’application, supprimer `boutique/data/maison-celeste.sqlite`, puis relancer.
