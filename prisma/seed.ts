import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? 'file:./prisma/dev.db',
});
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.task.createMany({
    data: [
      {
        title: 'Mettre à jour le README',
        content: 'Ajouter les instructions de lancement et les exemples curl',
        done: false,
      },
      {
        title: 'Corriger le bug #42',
        content: 'Le endpoint GET /tasks renvoie une erreur 500 quand la liste est vide',
        done: true,
      },
      {
        title: 'Ajouter les tests unitaires',
        content: 'Couvrir les cas limites du service TasksService',
        done: false,
      },
      {
        title: 'Revoir la PR de Sarah',
        content: null,
        done: false,
      },
      {
        title: 'Configurer le pipeline CI',
        content: 'Mettre en place le workflow GitHub Actions avec lint, tests, build et scan sécurité',
        done: false,
      },
    ],
  });

  console.log('Base de données initialisée avec des données de démonstration');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
