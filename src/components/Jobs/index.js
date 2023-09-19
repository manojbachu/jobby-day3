import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import ProfileAndSortOptions from '../ProfileAndSortOptions'

import './index.css'

const Jobs = props => {
  const {employmentTypesList, salaryRangesList} = props
  return (
    <>
      <Header />
      <div className="jobs">
        <div className="jobs-search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this}
          />

          <button
            type="button"
            data-testid="searchButton"
            className="search-button"
          >
            <BsSearch className="search-icon" />
          </button>
        </div>
        <ProfileAndSortOptions
          salaryRangesList={salaryRangesList}
          employmentTypesList={employmentTypesList}
        />
      </div>
    </>
  )
}

export default Jobs
