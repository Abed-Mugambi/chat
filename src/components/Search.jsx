import React from 'react'
import logo from "../img/logo.jpg"

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
          <input type="text"  placeholder='find a user'/>

        </div>

        <div className='userChat'> 
          <img src={logo} alt="" />
            <div className='userChatInfo'>
              <span>Jane</span>

            </div>

        </div>

    </div>
  )
}

export default Search