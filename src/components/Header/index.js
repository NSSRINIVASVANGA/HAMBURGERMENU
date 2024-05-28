import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <div className="navbar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <div>
      <Popup
        modal
        trigger={
          <button className="icon" data-testid="hamburgerIconButton">
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <>
            <div className="close-con">
              <button
                className="icon close"
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
              <ul className="nav-con">
                <li>
                  <Link to="/" className="extra">
                    <AiFillHome />
                    <p> Home </p>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="extra">
                    <BsInfoCircleFill />
                    <p> About </p>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
