import { Module } from '@nestjs/common';
import { BotWorkerService } from './bot-worker.service';
import { BotWorkerController } from './bot-worker.controller';
import { GraphileWorkerModule } from 'nestjs-graphile-worker';
import { ConfigService } from '@nestjs/config';
import { RecurrentTask } from 'src/tasks/recurrent.task';
import { HelloTask } from 'src/tasks/hello.task';

@Module({
	imports: [
		GraphileWorkerModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (config: ConfigService) => ({
				connectionString: config.get("POSTGRESQL_URI"),
				taskList: {
					"hello": HelloTask,
					"recurrent-task": RecurrentTask
				}
			}),
		})
	],
	controllers: [BotWorkerController],
	providers: [BotWorkerService, RecurrentTask, HelloTask],
	exports: [GraphileWorkerModule, BotWorkerService]
})

export class BotWorkerModule {}