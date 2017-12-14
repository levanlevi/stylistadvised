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

    let showSecondPage = true;
    let showSeparator = true;
    let showThirdPage = true;
    let showFourthPage = true;
    let showFifthPage = true;
    
    let firstPage = this.props.currentPage - 2;
    let firstPageStyle = aStyle;

    let secondPage = this.props.currentPage - 1;
    let secondPageStyle = aStyle;

    let thirdPage = this.props.currentPage;
    let thirdPageStyle = aActiveStyle;

    let fourthPage = this.props.currentPage + 1;
    let fourthPageStyle = aStyle;

    let fifthPage = this.props.currentPage + 2;
    let fifthPageStyle = aStyle;

    if (4 < countOfPages) {
      if (countOfPages === this.props.currentPage) {
        firstPage = this.props.currentPage - 4;

        secondPage = this.props.currentPage - 3;

        thirdPage = this.props.currentPage - 2;
        thirdPageStyle = aStyle;

        fourthPage = this.props.currentPage - 1;

        fifthPage = this.props.currentPage;
        fifthPageStyle = aActiveStyle;
      } else if (countOfPages === this.props.currentPage + 1) {
        firstPage = this.props.currentPage - 3;

        secondPage = this.props.currentPage - 2;

        thirdPage = this.props.currentPage - 1;
        thirdPageStyle = aStyle;

        fourthPage = this.props.currentPage;
        fourthPageStyle = aActiveStyle;

        fifthPage = countOfPages;
      } else if (1 === this.props.currentPage) {
        firstPage = this.props.currentPage;
        firstPageStyle = aActiveStyle;

        secondPage = this.props.currentPage + 1;

        thirdPage = this.props.currentPage + 2;
        thirdPageStyle = aStyle;

        fourthPage = this.props.currentPage + 3;

        fifthPage = this.props.currentPage + 4;
      } else if (2 === this.props.currentPage) {
        firstPage = this.props.currentPage - 1;        

        secondPage = this.props.currentPage;
        secondPageStyle = aActiveStyle;

        thirdPage = this.props.currentPage + 1;
        thirdPageStyle = aStyle;

        fourthPage = this.props.currentPage + 2;

        fifthPage = this.props.currentPage + 3;
      }
    } else {
      showSecondPage = 1 < countOfPages;
      showThirdPage = 2 < countOfPages;
      showFourthPage = 3 < countOfPages;
      showFifthPage = 4 < countOfPages;

      firstPageStyle = 1 === this.props.currentPage ? aActiveStyle : aStyle;
      firstPage = 1;
      secondPageStyle = 2 === this.props.currentPage ? aActiveStyle : aStyle;
      secondPage = 2;
      thirdPageStyle = 3 === this.props.currentPage ? aActiveStyle : aStyle;
      thirdPage = 3;
      fourthPageStyle = 4 === this.props.currentPage ? aActiveStyle : aStyle;
      fourthPage = 4;
    }

    this.state = {
      
      showSecondPage: showSecondPage,
      showSeparator: showSeparator,
      showThirdPage: showThirdPage,
      showFourthPage: showFourthPage,
      showFifthPage: showFifthPage,

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
      fourthPageLink: this.props.pathName + fourthPage,
      fourthPageStyle: fourthPageStyle,
      fourthPageText: fourthPage,
      fifthPageLink: this.props.pathName + fifthPage,
      fifthPageStyle: fifthPageStyle,
      fifthPageText: fifthPage,

      nextPageLink: countOfPages > this.props.currentPage ? this.props.pathName + (this.props.currentPage + 1) : this.props.pathName + this.props.currentPage,
      nextPageStyle: countOfPages > this.props.currentPage ? aEnabledStyle : aDisabledStyle,

      paginationText: 'Page ' + this.props.currentPage + ' of ' + countOfPages,
    }
  }

  render() {
		return (
      <nav className="g-mb-50" aria-label="Page Navigation">
        <ul className="list-inline">

          {/* <!-- Previous --> */}
          <li className="list-inline-item">
            <a className={this.state.previousPageStyle} href={this.state.previousPageLink} aria-label="Previous">
              <span aria-hidden="true">
                <i className="fa fa-angle-left"></i>
              </span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {/* <!-- End Previous --> */}

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
          {this.state.showFourthPage &&
            <li className="list-inline-item g-hidden-sm-down">
              <a className={this.state.fourthPageStyle} href={this.state.fourthPageLink}>{this.state.fourthPageText}</a>
            </li>
          }
          {this.state.showFifthPage &&
            <li className="list-inline-item g-hidden-sm-down">
              <a className={this.state.fifthPageStyle} href={this.state.fifthPageLink}>{this.state.fifthPageText}</a>
            </li>
          }

          {/* <!-- Next --> */}
          <li className="list-inline-item">
            <a className={this.state.nextPageStyle} href={this.state.nextPageLink} aria-label="Next">
              <span aria-hidden="true">
                <i className="fa fa-angle-right"></i>
              </span>
              <span className="sr-only">Next</span>
            </a>
          </li>
          {/* <!-- End Next --> */}

          <li className="list-inline-item float-right">
            <span className="u-pagination-v1__item-info g-pa-4-11">{this.state.paginationText}</span>
          </li>
        </ul>
      </nav>
    )
	}
}
