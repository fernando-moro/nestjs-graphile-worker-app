import { NestFactory } from '@nestjs/core';
import { WorkerService } from "nestjs-graphile-worker";
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { BotLoggerService } from './bot-logger/bot-logger.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		bufferLogs: true
	});
	app.useLogger(app.get(BotLoggerService));
	app.get(WorkerService).run();
	await app.listen(app.get(ConfigService<{PORT: number}, true>).get('PORT', {infer: true}));
}

bootstrap();