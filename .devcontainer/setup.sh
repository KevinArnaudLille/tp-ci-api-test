#!/bin/bash
set -e

echo "==> Installation des dépendances npm..."
npm ci

echo "==> Génération du client Prisma..."
npx prisma generate

echo "==> Création de la base de données SQLite et application des migrations..."
npx prisma migrate dev --name init

echo "==> Initialisation des données de démonstration..."
npx prisma db seed

echo "==> Installation de act (exécution locale des GitHub Actions)..."
curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash

echo "==> Installation de Trivy (scan de sécurité)..."
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sudo sh -s -- -b /usr/local/bin

echo ""
echo "✅ Environnement prêt !"
echo "   - Application : npm run start:dev  →  http://localhost:3000"
echo "   - Swagger      : http://localhost:3000/api"
echo "   - Tests        : npm test"
echo "   - CI locale    : act"
