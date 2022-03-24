import Tasks from '@src/models/tasks';

const TaskService = {
    async _find(
        query: any,
        options?: { select?: string; populate?: Array<{ path: string; select?: string; populate?: string }> }
    ): Promise<{ tasks: any[] }> {
        const promise = Tasks.find(query);

        if (options && options.select) {
            promise.select(options.select);
        }
        if (options && options.populate) {
            options.populate.map((op) => {
                const pop: any = { path: op.path };
                if (op.select) pop.select = op.select;
                if (op.populate) pop.populate = op.populate;
                return promise.populate(pop);
            });
        }
        const tasks = await promise.exec();

        return {
            tasks,
        };
    },
};

export default TaskService;
