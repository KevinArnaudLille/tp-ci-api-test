# Exercice 1 — Corriger une erreur de formatage

## Contexte

La pipeline CI échoue dès le job `format-lint`.

## Objectif

1. Lancer la CI localement : `act -j format-lint`
2. Lire les logs et identifier **quel fichier** est mal formaté
3. Corriger le problème
4. Vérifier que `act -j format-lint` repasse au vert

## Ce que vous devez comprendre

- Quel outil détecte les problèmes de formatage dans cette pipeline ?
- À quelle étape (step) précise la pipeline s'arrête-t-elle ?
- Comment corriger ce type d'erreur **sans lire le code ligne par ligne** ?

## Commandes utiles

```bash
# Voir les erreurs de formatage
npm run format:check

# Corriger automatiquement le formatage
npm run format
```
