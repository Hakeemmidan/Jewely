import {connect} from 'react-redux';
import {closeDrawer} from '../../actions/drawer_actions';
import {Drawer} from './drawer';

const mapStateToProps = (state) => {
  return state.ui.drawer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
