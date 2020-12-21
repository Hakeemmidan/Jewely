import {connect} from 'react-redux';
import {closeDrawer} from '../../actions/drawer_actions';
import {Drawer} from './drawer';

const mapStateToProps = ({ui}) => {
  return ui.drawer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDrawer: (direction) => dispatch(closeDrawer(direction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
