# Exercice 5 — Stabiliser une pipeline en échec multiple

## Contexte

Cette branche comporte **plusieurs problèmes** introduits en même temps. La pipeline échoue à plusieurs endroits.

## Objectif

1. Lancer la CI complète : `act`
2. Identifier **tous les problèmes** présents dans la pipeline
3. Les corriger **un à un**
4. Vérifier que la pipeline complète repasse au vert

## Indices

Il y a **deux types de problèmes** dans cette branche :
- Un problème dans le **code source** (détecté par un outil d'analyse statique)
- Un problème dans la **configuration de la pipeline** elle-même (dans le fichier YAML)

## Ce que vous devez comprendre

- Comment prioriser la correction de plusieurs erreurs CI en même temps ?
- Pourquoi est-il important que tous les jobs CI aient les bonnes dépendances (`needs`) ?
- Quelle est la différence entre un job qui *échoue* et un job qui *n'aurait pas dû se lancer* ?

## Commandes utiles

```bash
# Analyser le code
npm run lint

# Lancer toute la pipeline localement
act

# Lancer un job spécifique
act -j format-lint
act -j security
```
