/* eslint-disable react/destructuring-assignment */
import {Component} from 'react'

import {CiSearch} from 'react-icons/ci'
import {GrFavorite} from 'react-icons/gr'
import {BsBag, BsPerson} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  state = {
    isSidebarVisible: true,
  }

  handleButtonClick = () => {
    this.props.toggleSidebar()
    this.setState(prevState => ({
      isSidebarVisible: !prevState.isSidebarVisible,
    }))
  }

  render() {
    const {isSidebarVisible} = this.state
    return (
      <>
        <header>
          <div className="logo-search">
            <h1 className="h1">LOGO</h1>
            <div className="logos-icons">
              <CiSearch className="icon" />
              <GrFavorite className="icon" />
              <BsBag className="icon" />
              <BsPerson className="icon" />

              <div>
                <select>
                  <option>EN</option>
                  <option>TEL</option>
                </select>
              </div>
            </div>
          </div>

          <div className="header-items">
            <p className="header-items-items"> SHOP</p>
            <p className="header-items-items"> SKILLS </p>
            <p className="header-items-items"> STORIES </p>
            <p className="header-items-items"> ABOUT US </p>
            <p className="header-items-items"> CONTACT US </p>
          </div>

          <div className="discover">
            <h2> DISCOVER OUR PRODUCTS </h2>
            <p className="discover-p">
              {' '}
              A product description is a form of marketing copy used to describe
              and explain the benefits of your product{' '}
            </p>
          </div>

          <button
            className="button"
            type="button"
            onClick={this.handleButtonClick}
          >
            {isSidebarVisible ? 'Hide filter' : 'Show filter'}
          </button>
        </header>
      </>
    )
  }
}

export default Header
