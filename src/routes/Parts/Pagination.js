import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const aActiveStyle = 'u-pagination-v1__item u-pagination-v1-5 u-pagination-v1-5--active rounded g-pa-4-11';
const aStyle = 'u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11';

export default class Pagination extends React.Component {
  static propTypes = {
    countOfItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    itemsOnPage: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    const countOfPages = Math.ceil(this.props.countOfItems / this.props.itemsOnPage);

    this.state = {
      previousPageLink: countOfPages > this.props.currentPage ? this.props.currentPage + 1 : this.props.currentPage,
      firstPageLink: '',
      firstPageLink: '',
      firstPageText: 1 === this.props.currentPage ? this.props.currentPage : this.props.currentPage - 1,
      secondPageLink: '',
      secondPageText: 1 === this.props.currentPage ? this.props.currentPage + 1 : this.props.currentPage,
      thirdPageLink: '',
      thirdPageText: 1 === this.props.currentPage ? this.props.currentPage + 2 : this.props.currentPage + 1,
      lastPageLink: '',
      lastPageText: countOfPages,
      nextPageLink: 1 < this.props.currentPage ? this.props.currentPage - 1 : this.props.currentPage,
      paginationText: 'Page ' + this.props.currentPage + ' of ' + countOfPages,
    }
  }

  render() {
		return (
      <nav className="g-mb-50" aria-label="Page Navigation">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href={this.state.previousPageLink} aria-label="Previous">
              <span aria-hidden="true">
                <i className="fa fa-angle-left"></i>
              </span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="list-inline-item g-hidden-sm-down">
            <a className="u-pagination-v1__item u-pagination-v1-5 u-pagination-v1-5--active rounded g-pa-4-11" href={this.state.firstPageLink}>{this.state.firstPageText}</a>
          </li>
          <li className="list-inline-item g-hidden-sm-down">
            <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href={this.state.secondPageLink}>{this.state.secondPageText}</a>
          </li>
          <li className="list-inline-item g-hidden-sm-down">
            <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href={this.state.thirdPageLink}>{this.state.thirdPageText}</a>
          </li>
          <li className="list-inline-item g-hidden-sm-down">
            <span className="g-pa-4-11">...</span>
          </li>
          <li className="list-inline-item g-hidden-sm-down">
            <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href={this.state.lastPageLast}>{this.state.lastPageText}</a>
          </li>
          <li className="list-inline-item">
            <a className="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href={this.state.nextPageLink} aria-label="Next">
              <span aria-hidden="true">
                <i className="fa fa-angle-right"></i>
              </span>
              <span className="sr-only">Next</span>
            </a>
          </li>
          <li className="list-inline-item float-right">
            <span className="u-pagination-v1__item-info g-pa-4-11">{this.state.paginationText}</span>
          </li>
        </ul>
      </nav>
    )
	}
}
