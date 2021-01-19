import {connect} from 'react-redux';
import {updateFilter} from '../../actions/filter_actions';
import {openDrawer} from '../../actions/drawer_actions';
import {FilterForm} from './filter_form';

const mapStateToProps = (state) => {
  return {
    search: state.ui.filters.search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    openDrawer: (drawerType, openDirection, closeDirection) =>
      dispatch(openDrawer(drawerType, openDirection, closeDirection)),
  };
};

export const FilterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
