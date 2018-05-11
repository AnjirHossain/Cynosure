import React from 'react';

/**
 * Props:
 * - tasks
 * - expandedTask
 * - expandTask
 */
const TaskList = ({
	tasks,
	expandedTask,
	expandTask
}) => {
	// use toJS and use vanilla objects if necessary
	return <section>
		{!!tasks && tasks.size > 0 ? tasks.valueSeq().map((task) => {
			return <article>
				<li key={task.id}>
					{task.title}
				</li>
			</article>;
        }) : <h1>Insert motivational content here</h1>}
    </section>;
}

export default TaskList;

