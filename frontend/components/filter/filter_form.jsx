import React from 'react';

export class FilterForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(filter) { 
        return (
            e => (
                this.props.updateFilter(filter, e.currentTarget.value)
            )
        )
    }

    render() {
        return (
            <div>
                <label>Search</label>
                <input
                    type="string"
                    value={this.props.search}
                    onChange={this.handleChange('search')}
                />
            </div>
        )
    }
};