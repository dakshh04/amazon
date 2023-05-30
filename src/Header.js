import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <img className='header_logo' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Feconomictimes.indiatimes.com%2Findustry%2
      Fservices%2Fadvertising%2Fhidden-meaning-of-11-worlds-most-famous-logos%2Famazon%2Fslideshow
      %2F59738992.cms&psig=AOvVaw1RSB7VC35kb4yCMg0ucwRh&ust=1685525198047000&source=images&cd=vfe&ved=0CBEQj
      RxqFwoTCLia0-fcnP8CFQAAAAAdAAAAABAY" alt="" />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/*Logo*/}
      </div>
    </div>

  )
}

export default Header
