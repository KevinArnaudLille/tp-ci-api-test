# Exercice 2 — Réparer un test unitaire

## Contexte

La pipeline CI passe le job `format-lint` mais échoue sur le job `tests`.

## Objectif

1. Lancer la CI localement : `act -j tests`
2. Lire les logs pour identifier **quel test** échoue et **pourquoi**
3. Corriger le test sans modifier le code de production
4. Vérifier que `act -j tests` repasse au vert

## Ce que vous devez comprendre

- Dans quelle spec le test échoue-t-il ?
- Quelle est la différence entre la valeur attendue et la valeur réelle ?
- Pourquoi les tests de service utilisent-ils ici une base de données **en mémoire** plutôt qu'un mock objet ?

## Commandes utiles

```bash
# Lancer les tests et voir les erreurs
npm test

# Lancer les tests avec couverture
npm run test:ci
```
