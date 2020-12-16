import React from 'react';
import {HamburgerMenuIcon} from '../SVGs/hamburger_menu_icon';
import {SearchIcon} from '../SVGs/search_icon';

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
      <div className="search-input-field-container-main">
        <HamburgerMenuIcon className={'hamburger-menu-icon'} />
        <div className="search-input-field-container-sub">
          <input
            type="string"
            placeholder="Type to filter products by name and description"
            className="search-input-field"
            value={this.props.search}
            onClick={() => (window.location.hash = '#/')}
            onChange={this.handleChange('search')}
          />
          <SearchIcon />
        </div>
      </div>
    );
  }
}
