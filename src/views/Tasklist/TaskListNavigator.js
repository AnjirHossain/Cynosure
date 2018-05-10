import React from 'react';

/**
 * Props:
 * - setCurrentSelectedList
 * - currentSelectedListId
 */
const TaskListNavigator = ({ setCurrentSelectedList, currentSelectedListId }) => {
    return <div>
        <button
            onClick={setCurrentSelectedList.bind(null, "remainingTasks")}
        >
          Remaining tasks
        </button>
        <button
            onClick={setCurrentSelectedList.bind(null, "completedTasks")}
        >
          Completed tasks (5)
        </button>
      </div>;
};

export default TaskListNavigator;
