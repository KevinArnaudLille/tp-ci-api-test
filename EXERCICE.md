# Bonus — Paralléliser la pipeline

## Contexte

La pipeline actuelle exécute les jobs `format-lint` en séquence, alors qu'ils pourraient être parallélisés. Dans cette branche, le code est **sain** — c'est la pipeline qu'il faut améliorer.

## Objectif

Refactorer le fichier `.github/workflows/ci.yml` pour **séparer** le job `format-lint` en deux jobs indépendants :
- `format` — vérifie uniquement le formatage Prettier
- `lint` — vérifie uniquement ESLint

Ces deux jobs doivent s'exécuter **en parallèle** après `install`, et `tests` doit attendre qu'ils soient tous les deux terminés.

## Pipeline cible

```
install → format ┐
                 ├→ tests → build → security
         lint   ┘
```

## Ce que vous devez faire

1. Dans `.github/workflows/ci.yml`, remplacer le job `format-lint` par deux jobs séparés :
   - `format` : exécute `npm run format:check`
   - `lint` : exécute `npm run lint`
2. Mettre à jour le job `tests` : `needs: [format, lint]`
3. Vérifier avec `act` que les deux jobs s'exécutent bien en parallèle

## Critères de réussite

- La pipeline complète passe au vert
- Les jobs `format` et `lint` démarrent en même temps (après `install`)
- Le job `tests` attend bien les deux

## Commandes utiles

```bash
# Tester la nouvelle pipeline
act

# Tester uniquement les nouveaux jobs
act -j format
act -j lint
```
