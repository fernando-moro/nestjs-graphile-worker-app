import { Controller, HttpCode, Post } from '@nestjs/common';
import { BotWorkerService } from './bot-worker.service';

@Controller('worker')
export class BotWorkerController {
	constructor(private readonly botWorkerService: BotWorkerService) {}

	@Post("job/single")
	@HttpCode(201)
	async addJob() {
		return await this.botWorkerService.addJob();
	}

	@Post("job/batch")
	@HttpCode(201)
	async addBatchJob() {
		return await this.botWorkerService.addBatchJob();
	}

	@Post("job/bulk")
	@HttpCode(201)
	async addJobs() {
		return await this.botWorkerService.addJobs();
	}
}