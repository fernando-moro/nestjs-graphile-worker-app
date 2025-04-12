import { Injectable } from "@nestjs/common";
import type { Helpers } from "graphile-worker";
import { Task, TaskHandler } from "nestjs-graphile-worker";

@Injectable()
@Task("recurrent-task")
export class RecurrentTask {

	@TaskHandler()
	handler(payload: any, _helpers: Helpers): void { 
		_helpers.logger.debug(`handle recurent task ${JSON.stringify(payload)}`);
	}
}