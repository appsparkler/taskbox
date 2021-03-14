import {connect} from 'react-redux'
import TaskList from './index'
import {archiveTask, pinTask} from '../../../lib/redux'

export default connect(
    ({ tasks, loading }) => ({
      tasks,
      loading,
    }),
    (dispatch) => ({
      onArchiveTask: (id) => dispatch(archiveTask(id)),
      onPinTask: (id) => dispatch(pinTask(id)),
    })
  )(TaskList);