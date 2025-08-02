import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved by Mohit.</div>
      <div>
        <Link to={'https://github.com/Mohitkk200'} target='github'><FaGithub /></Link>
        <Link to={'https://leetcode.com/u/mohit_jain_23/'} target='leetcode'><SiLeetcode /></Link>
        <Link to={'https://www.linkedin.com/in/mohit-kumar-jain-a2545a240/'} target='linkedin'><FaLinkedin /></Link>
      </div>
    </footer>
  )
}

export default Footer