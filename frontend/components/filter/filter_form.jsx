import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

class FilterForm {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <label>Search</label>
                <input
                    type="number"
                    value={this.props.search}
                    onChange={handleChange('search', this.props.updateFilter)}
                />
            </div>
        )
    }
};