import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotLoggerModule } from './bot-logger/bot-logger.module';
import { BotWorkerModule } from './bot-worker/bot-worker.module';

@Module({
  imports: [
	ConfigModule.forRoot({isGlobal: true, cache: true}),
	BotLoggerModule,
	EventEmitterModule.forRoot(),
	BotWorkerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {}