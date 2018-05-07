import React from 'react';
import { ButtonRegular, ButtonPrimary } from '../common/Buttons';
import { InputText } from "../common/Inputs";
import { TextArea } from "../common/TextArea";
import { Icon } from 'antd'
import DeadlineSetter from './DeadlineSetter';

const TaskForm = ({
  formMode,
  onSubmit,
  setFormContent,
  showAddDetails,
  showDeadlineSetter,
  toggleDeadlineSetter,
  toggleAddDetails,
  onDateChange,
  onTimeChange,
  defaultTimeValue,
  defaultDateValue
}) => {
  let taskFormContent;

  switch (formMode) {
    case "TASK_FORM":
      taskFormContent = <div>
        <form id="addTaskForm" name="addTaskForm" onSubmit={onSubmit}>
            {/* Form textual data */}
            <fieldset>
              <InputText required={true} placeholder="Title" name="title" />
              <InputText required={true} placeholder="What's the outcome of this task?..." name="outcome" />
            </fieldset>

            {/*
            Reveals 'add details' section
            - wrap the following in a div to animate
            */}
            <fieldset>
              {showAddDetails ? <TextArea placeholder="Add task details..." name="details" /> : null}
              {showDeadlineSetter ? <DeadlineSetter onDateChange={onDateChange} onTimeChange={onTimeChange} defaultDateValue={defaultDateValue} defaultTimeValue={defaultTimeValue} /> : null}
            </fieldset>

            <fieldset>
              <ButtonRegular title="Add task details" type="button" onClick={toggleAddDetails}>
                <Icon type="exception" />
              </ButtonRegular>
              {/* Opens a deadline setter */}
              <ButtonRegular title="Set task deadline" type="button" onClick={toggleDeadlineSetter}>
                <Icon type="calendar" />
              </ButtonRegular>
              <ButtonPrimary type="submit">Save</ButtonPrimary>
            </fieldset>
          </form>
        </div>;
      break;

    default:
      taskFormContent = (
        <div>
          <ButtonRegular onClick={setFormContent.bind(null, "TASK_FORM")}>
            Add new task <Icon type="plus" />
          </ButtonRegular>
        </div>
      );
      break;
  }

  return taskFormContent;
};

export default TaskForm;