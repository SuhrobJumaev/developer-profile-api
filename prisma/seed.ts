import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@app/database/generated/prisma/client';
import { SocialLinkType } from '../src/common/enums/social-link-type';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

const PROFILE_ID = '00000000-0000-4000-8000-000000000001';

async function main(): Promise<void> {
  const existingProfile = await prisma.profile.findUnique({
    where: {
      id: PROFILE_ID,
    },
    select: {
      id: true,
    },
  });

  if (existingProfile) {
    console.log('Seed data already exists. Skipping seed.');
    return;
  }

  await prisma.profile.create({
    data: {
      id: PROFILE_ID,

      firstName: 'Suhrob',
      lastName: 'Jumaev',

      headline:
        'Senior Backend Developer | Node.js / NestJS / .NET | FinTech, Payments & Trading',

      bio: 'Backend Developer with 7+ years of commercial experience in fintech, payments, telecommunications, cryptocurrency and distributed systems. Experienced in building microservices, payment systems, digital wallets, banking integrations, crypto services and trading integrations.',

      location: 'Dushanbe, Tajikistan',

      skills: {
        create: [
          { name: 'TypeScript' },
          { name: 'JavaScript' },
          { name: 'Node.js' },
          { name: 'NestJS' },
          { name: 'C#' },
          { name: '.NET' },
          { name: 'ASP.NET Core' },
          { name: 'PostgreSQL' },
          { name: 'ScyllaDB' },
          { name: 'Redis' },
          { name: 'MongoDB' },
          { name: 'SQL Server' },
          { name: 'MySQL' },
          { name: 'Prisma' },
          { name: 'TypeORM' },
          { name: 'Entity Framework' },
          { name: 'Dapper' },
          { name: 'NATS' },
          { name: 'Kafka' },
          { name: 'RabbitMQ' },
          { name: 'Centrifugo' },
          { name: 'WebSockets' },
          { name: 'Docker' },
          { name: 'Git' },
          { name: 'Linux' },
          { name: 'REST' },
          { name: 'SOAP' },
          { name: 'GraphQL' },
          { name: 'Clean Architecture' },
          { name: 'CQRS' },
          { name: 'Microservices' },
          { name: 'Event-Driven Architecture' },
          { name: 'OAuth' },
          { name: 'JWT' },
        ],
      },

      experiences: {
        create: [
          {
            company: 'Crypton Studio',
            position: 'Backend Developer',
            startedAt: new Date('2024-12-01'),
            description:
              'Developing a fintech platform supporting fiat and cryptocurrency operations, multi-currency accounts, foreign exchange, international transfers and investments. Integrated cryptocurrency services, MetaTrader 5 trading functionality, Copy Trading providers, NATS-based microservices and Centrifugo/WebSockets.',
          },
          {
            company: 'Freelance',
            position: 'Backend Developer',
            startedAt: new Date('2024-06-01'),
            endedAt: new Date('2024-12-01'),
            description:
              'Developed an electronic queue management system for banks, a mobile power-bank rental backend with QR payments and the initial backend architecture for the RakhshPay wallet.',
          },
          {
            company: 'NBCO "Vasl"',
            position: 'Backend Developer',
            startedAt: new Date('2023-05-01'),
            endedAt: new Date('2024-06-01'),
            description:
              'Participated in architecture and core development of a microservice-based payment system. Implemented banking, payment, ABS and card integrations.',
          },
          {
            company: 'LLC "Babilon-M"',
            position: 'Software Development Engineer',
            startedAt: new Date('2019-01-01'),
            endedAt: new Date('2023-05-01'),
            description:
              'Developed telecom integrations using SOAP, SMPP and USSD, including subscriber billing, SMS and OTP APIs and integrations with external partners.',
          },
        ],
      },

      projects: {
        create: [
          {
            name: 'Trillion',
            description:
              'Fintech platform supporting fiat and cryptocurrency operations, multi-currency accounts, foreign exchange, transfers, investments and trading integrations.',
          },
          {
            name: 'Developer Profile API',
            description:
              'Developer profile backend built with TypeScript, NestJS, Prisma, GraphQL and Docker.',
            repositoryUrl:
              'https://github.com/SuhrobJumaev/developer-profile-api',
          },
        ],
      },

      socialLinks: {
        create: [
          {
            type: SocialLinkType.Github,
            url: 'https://github.com/SuhrobJumaev/',
          },
          {
            type: SocialLinkType.Linkedin,
            url: 'linkedin.com/in/suhrob-jumaev-00ba431b4',
          },
        ],
      },
    },
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((error: unknown) => {
    console.error('Database seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
