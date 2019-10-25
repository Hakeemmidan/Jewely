import { connect } from 'react-redux';


import { fetchUser } from '../../actions/user_actions';
import { UserShow } from './user_show';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (UserShow)