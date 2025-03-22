import React from 'react'
import '../assets/css/pagenotfound.css'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <>
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! Nothing was found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <Link to={'/'}>Return to homepage</Link></p>
			<div class="notfound-social">
				<a href="https://www.facebook.com/kingofagro?rdid=mtbneojk0Tk2DOcv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ACmXHRpsP%2F#" target="_blank"><i class="fab fa-facebook"></i></a>
				<a href="https://wa.me/+918000014151"><i class="fab fa-whatsapp"></i></a>
				<a href="https://www.instagram.com/king_agro_chemicals?igsh=MWxnY3lmMnh2emV2NQ==" target="_blank"><i class="fab fa-instagram"></i></a>
			</div>
		</div>
	</div>

    </>
  )
}

export default PageNotFound