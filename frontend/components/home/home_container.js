import {connect} from 'react-redux';
import Home from './home';

const homeComponent = ({session}) => {
  if (session.currentUser) {
    return (
      <div></div>
    );
  }
  else {
    return (
      <HomeContainer />
    );
  }
};

export default connect(

)(Home);
