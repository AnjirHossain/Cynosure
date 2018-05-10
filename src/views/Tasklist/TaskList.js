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
	return <div>
		{!!tasks && tasks.size > 0 ? tasks.valueSeq().map((task) => {
			return <li key={task.id}>{task.title}</li>;
        }) : <h1>Insert motivational content here</h1>}
    </div>;
}

export default TaskList;

