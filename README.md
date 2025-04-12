<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://worker.graphile.org/" target="blank"><img src="https://worker.graphile.org/img/logo.optimized.svg" width="120" alt="Graphile Worker Logo" /></a>
</p>

<h1 align="center">NestJS + Graphile Worker App</h1>

<p align="center">
  A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework integrated with <a href="https://worker.graphile.org/" target="_blank">Graphile Worker</a> to create a robust and scalable queue processing system.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

---

## Overview

This project demonstrates how to use [NestJS](https://nestjs.com) with [Graphile Worker](https://worker.graphile.org/) to build a queue-based processing system. It leverages the scalability and modularity of NestJS alongside the powerful job queueing capabilities of Graphile Worker.

## Features

- **NestJS Framework**: A progressive Node.js framework for building efficient server-side applications.
- **Graphile Worker Integration**: A lightweight and high-performance job queue for PostgreSQL.
- **Queue Management**: Easily define and process tasks in a queue.
- **Scalability**: Designed to handle high-throughput workloads.
- **Developer Tools**: Includes linting, formatting, and testing utilities.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org) (v16 or higher recommended)
- [PostgreSQL](https://www.postgresql.org) (v12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

Clone the repository and install dependencies:

```bash
$ git clone https://github.com/your-repo/nestjs-graphile-worker-app.git
$ cd nestjs-graphile-worker-app
$ npm install
```

## Configuration

1. Create a `.env` file in the root directory and configure your PostgreSQL connection:

```env
POSTGRESQL_URI=postgres://username:password@localhost:5432/your_database
```

2. Run database migrations (if applicable).

## Running the Application

Start the application in different modes:

```bash
# Development mode
$ npm run start

# Watch mode (auto-restart on file changes)
$ npm run start:dev

# Production mode
$ npm run start:prod
```

## Using the Queue

1. Define a task in the `tasks` folder.
2. Add jobs to the queue using the `Graphile Worker` API.
3. Process jobs automatically with the worker.

Example of adding a job:

```typescript
import { addJob } from 'graphile-worker';

await addJob('task_name', { key: 'value' });
```

## Linting and Formatting

Ensure code quality with the following commands:

```bash
# Lint and autofix
$ npm run lint

# Format code
$ npm run format
```

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Graphile Worker Documentation](https://worker.graphile.org/)
- [NestJS Discord Community](https://discord.gg/G7Qnnhy)

## Support

This project is open-source and licensed under the [MIT License](https://opensource.org/licenses/MIT). Contributions are welcome!

## Author

- **Fernando** - [GitHub Profile](https://github.com/your-profile)

---
