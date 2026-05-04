# Exercice 3 — Remettre la pipeline dans le bon ordre

## Contexte

La pipeline CI s'exécute sans erreur apparente... mais quelque chose ne va pas dans l'ordre des jobs.

## Objectif

1. Ouvrir le fichier `.github/workflows/ci.yml`
2. Analyser l'ordre d'exécution des jobs et leurs dépendances (`needs`)
3. Identifier le problème sans forcément lancer la CI
4. Corriger le workflow pour respecter une stratégie **fail-fast** correcte
5. Vérifier avec `act` que la pipeline s'exécute dans le bon ordre

## Ce que vous devez comprendre

- Qu'est-ce que la stratégie **fail-fast** ?
- Pourquoi le **build** ne devrait-il pas s'exécuter avant les **tests** ?
- Quel est le coût d'un build inutile si les tests échouent après ?
- Comment lire le graphe d'exécution d'une pipeline à partir des `needs` ?

## Rappel de l'ordre cible

```
install → format-lint → tests → build → security
```
