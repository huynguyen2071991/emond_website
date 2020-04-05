import React from "react"

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/sass/import.scss'
import workStyles from './work.module.scss'

const Work = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Work