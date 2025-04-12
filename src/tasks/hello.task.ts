import { Injectable } from "@nestjs/common";
import type { Helpers } from "graphile-worker";
import { Task, TaskHandler } from "nestjs-graphile-worker";

@Injectable()
@Task("hello")
export class HelloTask {

	@TaskHandler()
	handler(payload: any | any[], _helpers: Helpers): void {
		if (Array.isArray(payload)) {
			_helpers.logger.debug(`handle array payload ${JSON.stringify(payload)}`);
		} else {
			_helpers.logger.debug(`handle ${JSON.stringify(payload)}`);
		}

		if (Math.random() < 0.5) {
			throw new Error("Random error occurred");
		}
	}
}