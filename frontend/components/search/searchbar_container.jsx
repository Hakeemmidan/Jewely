import { connect } from 'react-redux'

import { Searchbar } from './searchbar';

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products),
    }
}

export default connect(
    mapStateToProps,
    null)
    (Searchbar)