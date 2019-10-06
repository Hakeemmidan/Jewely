import { connect } from 'react-redux';

import { ReviewsIndex } from './reviews_index';
import { fetchReviews } from '../../../actions/review_actions'
import { fetchUser } from '../../../actions/user_actions'


const mapStateToProps = (state) => {
    return {
        reviews: Object.values(state.entities.reviews),
        author: Object.values(state.entities.users[0])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: () => dispatch(fetchReviews()),
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ReviewsIndex)