import React from 'react';

export class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filter) {
    return (e) => this.props.updateFilter(filter, e.currentTarget.value);
  }

  render() {
    return (
      <div className="search-input-field-container">
        <input
          type="string"
          placeholder="Type to filter products by name and description"
          className="search-input-field"
          value={this.props.search}
          onClick={() => (location.hash = '#/')}
          onChange={this.handleChange('search')}
        />
      </div>
    );
  }
}
