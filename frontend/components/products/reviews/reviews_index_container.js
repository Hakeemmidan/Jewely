import { connect } from 'react-redux';

import { ReviewsIndex } from './reviews_index';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ReviewsIndex)