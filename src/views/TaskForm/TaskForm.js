import React from 'react';
import { ButtonRegular } from '../common/Buttons';
import { InputText } from "../common/Inputs";

const TaskForm = ({
    formMode,
    onSubmit,
    setFormContent
}) => {
    let taskFormContent;

    switch (formMode) {
      case "TASK_FORM":
            taskFormContent = <div>
                <form onSubmit={onSubmit}>
                  <InputText placeholder="Enter task title here" />
                  <ButtonRegular
                    onClick={setFormContent.bind(null, "DEFAULT")}
                  >
                    Done
                  </ButtonRegular>
                </form>
              </div>;
      default:
        taskFormContent = <div>
            <ButtonRegular
              onClick={setFormContent.bind(null, "TASK_FORM")}
            >
              Add new task +
            </ButtonRegular>
          </div>;
        break;
    }

    return taskFormContent;
}

export default TaskForm;