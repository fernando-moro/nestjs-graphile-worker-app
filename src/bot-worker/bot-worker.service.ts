import { Injectable } from '@nestjs/common';
import { WorkerEventMap } from "graphile-worker";
import { GraphileWorkerListener, OnWorkerEvent, WorkerService } from 'nestjs-graphile-worker';
import { BotLoggerService } from 'src/bot-logger/bot-logger.service';

@Injectable()
@GraphileWorkerListener()
export class BotWorkerService {

	private readonly loggerContext = BotWorkerService.name;

	constructor
	(
		private readonly logger: BotLoggerService,
		private readonly graphileWorker: WorkerService
	) {}

	@OnWorkerEvent("job:success")
	onJobSuccess({ worker, job }: WorkerEventMap["job:success"]) {
		this.logger.debug(`Worker #${worker.workerId} completed job #${job.id}`, this.loggerContext);
	}

	@OnWorkerEvent("job:error")
	onJobError({ worker, job, error }: WorkerEventMap["job:error"]) {
		this.logger.error(`Worker #${worker.workerId} got job #${job.id} failed: ${JSON.stringify(error)}`, this.loggerContext);
	}

	async addJob() {

		const job = {
			identifier: "hello",
			payload: { 
				hello: "world"
			},
			spec: { 
				queueName: "hello queue", 
				maxAttempts: 3, 
				runAt: new Date(Date.now() + 1000 * 60) 
			}
		};

		return await this.graphileWorker.addJob(job.identifier, job.payload, job.spec);
	}

	async addBatchJob() {

		const jobKeyMode: "replace" | "preserve_run_at" | "unsafe_dedupe" = "preserve_run_at";

		const job = {
			identifier: "hello",
			payload: Array.from({ length: 10 }, (_, i) => ({
				hello: `world ${i + 1}`
			})),
			spec: { 
				queueName: "hello batch queue", 
				maxAttempts: 5, 
				jobKey: "job-batch-key-1",
				jobKeyMode: jobKeyMode,
				runAt: new Date(Date.now() + 1000 * 60)
			}
		};

		return await this.graphileWorker.addJob(job.identifier, job.payload, job.spec);
	}

	async addJobs() {
		const jobs = Array.from({ length: 10 }, (_, i) => ({
			identifier: "hello",
			payload: { 
				hello: i
			},
			spec: {
				queueName: "hello bulk queue",
				maxAttempts: 3,
				runAt: new Date(Date.now() + 1000 * 60) }
		}));

		return await this.graphileWorker.addJobs(jobs);
	}

}