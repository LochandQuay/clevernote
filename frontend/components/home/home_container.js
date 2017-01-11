import {connect} from 'react-redux';
import Home from './home';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  errors: session.errors
});


export default connect(
  mapStateToProps
)(Home);
