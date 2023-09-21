import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import ProfileAndSortOptions from '../ProfileAndSortOptions'

import './index.css'

const Jobs = () => (
  <>
    <Header />
    <div className="jobs">
      <div className="jobs-search-container search-sm">
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
      <div className="jobs-container">
        <ProfileAndSortOptions />

        <div className="jobs-search-container search-lg">
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
      </div>
    </div>
  </>
)

export default Jobs
