# Developer Profile API

Backend application built with NestJS, GraphQL, Prisma and PostgreSQL.

## Requirements

- **NodeJS**: v20+
- **PostgreSQL**: 16.0+
- **Docker**
- **Docker Compose**

## Getting Started

### 1. Environment Setup

Create a `.env` file by copying `.env.local`:

```bash
cp .env.local .env
```


All required commands for Prisma, migrations, seed and application startup are available in `package.json`.

When the application is started in standard or production mode, database migrations and seed data are applied automatically before the application starts.

### 2. Install Dependencies

Install the required Node modules:

```bash
yarn install
```


### 4. Start the Server

Launch the development server:

```bash
yarn start
```

Available endpoints:

- **Backend**: `http://localhost:5004`
- **GraphQL / Apollo Sandbox**: `http://localhost:5004/graphql`

## Docker Setup for Developers

### Option 1: Local Development

Use this option when the backend runs locally and PostgreSQL runs inside Docker.

Make sure `.env` contains:

```env
DATABASE_URL=postgresql://app:root@localhost:5433/app_db?schema=public
```

Navigate to the Docker directory and start the local services:

```bash
cd docker

docker-compose -f docker-compose.local.yml up -d
```

Then start the backend in development mode.

Available services:

- **Backend**: `http://localhost:5004`
- **GraphQL / Apollo Sandbox**: `http://localhost:5004/graphql`
- **PostgreSQL**: `localhost:5433`
- **Adminer**: `http://localhost:8082`

Adminer credentials:

- **System**: PostgreSQL
- **Server**: `app-db`
- **Username**: `app`
- **Password**: `root`
- **Database**: `app_db`

### Option 2: Full Docker Setup

Use this option when the backend and PostgreSQL run together inside Docker.

For this setup, `.env` must contain:

```env
DATABASE_URL=postgresql://app:root@app-db:5432/app_db?schema=public
```

Navigate to the Docker directory and start the application:

```bash
cd docker

docker-compose up -d --build
```

Available services:

- **Backend**: `http://localhost:5004`
- **GraphQL / Apollo Sandbox**: `http://localhost:5004/graphql`
- **Adminer**: `http://localhost:8082`

Inside the Docker network, PostgreSQL is available at `app-db:5432`.

## File Naming Conventions

- Source files: `{name}.{resource_type}.ts`
- Unit tests: `{name}.{resource_type}.spec.ts`

## Project Structure

The application follows a modular NestJS structure.

## Directory Overview

- **`src`**: Core application code and configuration.
  - **`config`**: Application configuration.
  - **`enums`**: Application-level enumerations.
  - **`filters`**: Error filters and handlers.
  - **`modules`**: Application modules.
- **`prisma`**: Prisma schema, migrations and seed configuration.
- **`docker`**: Docker and Docker Compose configuration.

## Module Structure

Each module follows this structure where applicable:

- **`<name>.module.ts`**: Module definition.
- **`graphql`**: GraphQL-related components.
  - **`models`**: GraphQL models.
  - **`mappers`**: Mapping between Prisma entities and GraphQL models.
  - **`selectors`**: Prisma selection based on requested GraphQL relations.
- **`repositories`**: Database access through Prisma.
- **`services`**: Application and business logic.

## GraphQL

The API uses GraphQL for profile retrieval.

GraphQL endpoint:

```text
http://localhost:5004/graphql
```

Example query:

```graphql
query {
  profile {
    id
    firstName
    lastName
    headline
    bio
    location
    avatarUrl

    skills {
      id
      name
      level
      createdAt
    }

    experiences {
      id
      company
      position
      description
      startedAt
      endedAt
    }

    projects {
      id
      name
      description
      repositoryUrl
      liveUrl
      startedAt
      endedAt
    }

    socialLinks {
      id
      type
      url
    }
  }
}
```

Profile relations are loaded from the database only when they are requested in the GraphQL query.