import {connect} from 'react-redux';
import TaskInbox from './index'

export default connect(({ error }) => ({ error }))(TaskInbox);
