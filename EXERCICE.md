# Exercice 4 — Lire et comprendre les logs CI

## Contexte

La pipeline CI échoue sur le job `format-lint`. Le problème est subtil et ne saute pas aux yeux en lisant le code.

## Objectif

1. Lancer la CI localement : `act -j format-lint`
2. **Lire attentivement** les logs produits par le job
3. Identifier l'outil, le fichier, la ligne et la règle qui déclenchent l'erreur
4. Comprendre *pourquoi* cette règle existe en équipe
5. Corriger le problème et vérifier que la pipeline repasse au vert

## Ce que vous devez comprendre

- Quelle règle ESLint/SonarJS est violée ?
- Quel en est le sens métier (pourquoi cette règle est-elle utile) ?
- Comment s'assurer qu'un commentaire temporaire n'arrive jamais en production ?

## Commandes utiles

```bash
# Voir les erreurs de lint directement
npm run lint

# Lancer uniquement le job format-lint
act -j format-lint
```
