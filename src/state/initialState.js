import { Map } from 'immutable';

export default {
  tasks: Map({
    remainingTasks: Map({
      a: {
        id: 1,
        title: "A"
      },
      b: {
        id: 2,
        title: "B"
      }
    }),
    completedTasks: Map(null)
  }),
  /*
    uis is prepended to all state objects
    that manage ui state. The keynames
    follow the format: uis<ComponentName>
    */
  uisTaskListContainer: Map({
    currentSelectedListId: "remainingTasks",
    expandedTask: Map({
      taskId: null,
      // either "remainingTasks" or "completedTasks"
      selectedListId: null
    })
  }),
  uisTaskFormContainer: Map({
    contentKey: "DEFAULT"
  })
};