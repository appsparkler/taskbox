import {connect} from 'react-redux';
import TaskInbox from './index'

export default connect(({ error, tasks, loading }) => ({ 
    error, tasks, loading 
}))(TaskInbox);
