import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const aActiveStyle = 'u-pagination-v1__item u-pagination-v1-5 u-pagination-v1-5--active rounded g-pa-4-11';
const aEnabledStyle = 'u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13';
const aDisabledStyle = 'u-pagination-v1__item u-pagination-v1-5 u-pagination-v1__item--disabled rounded g-pa-4-13';
const aStyle = 'u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11';

export default class Pagination extends Component {
  static propTypes = {
    countOfItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    itemsOnPage: PropTypes.number.isRequired,
    pathName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    const countOfPages = Math.ceil(this.props.countOfItems / this.props.itemsOnPage);

    let showLastPage = true;
    let showSecondPage = true;
    let showSeparator = true;
    let showThirdPage = true;
    
    let firstPage = 1 === this.props.currentPage ? this.props.currentPage : this.props.currentPage - 1;
    let firstPageStyle = 1 === this.props.currentPage ? aActiveStyle : aStyle;

    let secondPage = 1 === this.props.currentPage ? this.props.currentPage + 1 : this.props.currentPage;
    let secondPageStyle = 1 === this.props.currentPage ? aStyle : aActiveStyle;

    let thirdPage = 1 === this.props.currentPage ? this.props.currentPage + 2 : this.props.currentPage + 1;
    let thirdPageStyle = aStyle;

    const lastPageStyle = countOfPages === this.props.currentPage ? aActiveStyle : aStyle;

    if (4 < countOfPages) {
      if (countOfPages === this.props.currentPage) {
        firstPage = this.props.currentPage - 4;
        secondPage = this.props.currentPage - 3;
        secondPageStyle = aStyle;
        thirdPage = this.props.currentPage - 2;
      }
    } else {
      showSeparator = false;

      showLastPage = 4 === countOfPages;
      showSecondPage = 1 < countOfPages;
      showThirdPage = 2 < countOfPages;

      secondPageStyle = 2 === this.props.currentPage ? aActiveStyle : aStyle;
      thirdPageStyle = 3 === this.props.currentPage ? aActiveStyle : aStyle;
    }
    

    this.state = {
      showLastPage: showLastPage,
      showSecondPage: showSecondPage,
      showSeparator: showSeparator,
      showThirdPage: showThirdPage,
      previousPageLink: 1 < this.props.currentPage ? this.props.currentPage - 1 : this.props.currentPage,
      previousPageStyle: 1 < this.props.currentPage ? aEnabledStyle : aDisabledStyle,
      firstPageLink: this.props.pathName + firstPage,
      firstPageStyle: firstPageStyle,
      firstPageText: firstPage,
      secondPageLink: this.props.pathName + secondPage,
      secondPageStyle: secondPageStyle,
      secondPageText: secondPage,
      thirdPageLink: this.props.pathName + thirdPage,
      thirdPageStyle: thirdPageStyle,
      thirdPageText: thirdPage,
      lastPageLink: this.props.pathName + countOfPages,
      lastPageStyle: lastPageStyle,
      lastPageText: countOfPages,
      nextPageLink: countOfPages > this.props.currentPage ? this.props.pathName + (this.props.currentPage + 1) : this.props.pathName + this.props.currentPage,
      nextPageStyle: countOfPages > this.props.currentPage ? aEnabledStyle : aDisabledStyle,
      paginationText: 'Page ' + this.props.currentPage + ' of ' + countOfPages,
    }
  }

  render() {
		return (
      <nav className="g-mb-50" aria-label="Page Navigation">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a className={this.state.previousPageStyle} href={this.state.previousPageLink} aria-label="Previous">
              <span aria-hidden="true">
                <i className="fa fa-angle-left"></i>
              </span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="list-inline-item g-hidden-sm-down">
            <a className={this.state.firstPageStyle} href={this.state.firstPageLink}>{this.state.firstPageText}</a>
          </li>
          {this.state.showSecondPage && 
            <li className="list-inline-item g-hidden-sm-down">
              <a className={this.state.secondPageStyle} href={this.state.secondPageLink}>{this.state.secondPageText}</a>
            </li>
          }
          {this.state.showThirdPage &&
            <li className="list-inline-item g-hidden-sm-down">
              <a className={this.state.thirdPageStyle} href={this.state.thirdPageLink}>{this.state.thirdPageText}</a>
            </li>
          }
          {this.state.showSeparator &&
            <li className="list-inline-item g-hidden-sm-down">
              <span className="g-pa-4-11">...</span>
            </li>
          }
          {this.state.showLastPage &&
            <li className="list-inline-item g-hidden-sm-down">
              <a className={this.state.lastPageStyle} href={this.state.lastPageLink}>{this.state.lastPageText}</a>
            </li>
          }
          <li className="list-inline-item">
            <a className={this.state.nextPageStyle} href={this.state.nextPageLink} aria-label="Next">
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
