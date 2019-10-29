import React from 'react';

export class FilterForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(filter) { 
        return (
            e => (
                this.props.updateFilter(filter, parseInt(e.currentTarget.value))
            )
        )
    }

    render() {
        return (
            <div>
                <label>Search</label>
                <input
                    type="number"
                    value={this.props.search}
                    onChange={handleChange('search')}
                />
            </div>
        )
    }
};