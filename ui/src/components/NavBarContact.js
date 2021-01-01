import React from 'react'
import { Mail, Phone, Linkedin, Twitter } from 'react-feather'
import { connect } from 'react-redux'
import { pageClick } from '../redux/actions'

const hrefClick = (type, href, pageClick) => {
  pageClick(type)
  window.location.href=href
}

const openClick = (type, location, pageClick) => {
  pageClick(type)
  window.open(location)
}

const NavBarContact = ({ pageClick }) => (
  <div className="nav-bar-contact-container">
    <Mail onClick={() => hrefClick('email', 'mailto:ccamargo@ucsd.edu', pageClick)} className="nav-bar-contact-icon"/>
    <Phone onClick={() => hrefClick('phone', 'tel:760-904-7513', pageClick)} className="nav-bar-contact-icon"/>
    <Linkedin onClick={() => openClick('linkedIn', 'https://www.linkedin.com/in/crcamargo/', pageClick)}  className="nav-bar-contact-icon"/>
    <Twitter onClick={() => openClick('twitter', 'https://twitter.com/phdeezy_', pageClick)} className="nav-bar-contact-icon"/>
  </div>
)

const mapDispatchToProps = {
  pageClick
}

export default connect(null, mapDispatchToProps)(NavBarContact)