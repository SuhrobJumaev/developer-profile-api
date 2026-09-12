// api/index.js
// Отдельная точка входа ТОЛЬКО для Vercel serverless. main.ts не меняется и не используется здесь.
// Импортируем уже собранные dist-модули (после nest build + tsc-alias),
// поэтому никаких алиасов "@/..." тут нет и быть не может.

const { NestFactory } = require('@nestjs/core');
const { ValidationPipe } = require('@nestjs/common');
const { HttpAdapterHost } = require('@nestjs/core');
const helmet = require('helmet');
const { json, urlencoded } = require('express');

const { AppModule } = require('../dist/src/app.module');
const config = require('../dist/src/config').default;
const swaggerConfig = require('../dist/src/config/swagger.config').default;
const {
  AppExceptionsFilter,
} = require('../dist/src/filters/app.exceptions.filter');

let cachedHandler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const adapter = app.get(HttpAdapterHost);

  app.useGlobalFilters(new AppExceptionsFilter(adapter));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix(config.routePrefix);

  swaggerConfig(app);

  app.enableCors(config.cors);
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );
  app.use(json({ limit: config.maxBodySize }));
  app.use(urlencoded({ extended: true, limit: config.maxBodySize }));

  // В serverless не вызываем app.listen() — Vercel сам управляет входящими запросами.
  await app.init();

  // Express-инстанс можно вызывать напрямую как (req, res) => {} — это и есть handler.
  return app.getHttpAdapter().getInstance();
}

module.exports = async (req, res) => {
  if (!cachedHandler) {
    cachedHandler = await bootstrap();
  }
  return cachedHandler(req, res);
};
