import React from 'react'

const MenuBar = ({select, selected}) => {

 const handleClick = (e) => {
   select(e.target.id)
  //  e.target.className = "item active"
  //  if(e.target.className==="item") {
  //    e.target.className = "item active"
  //  }
  //  e.target.className = "item"
  // this did not work becauce it was changing the className
  // of the <i> element instead of the <a> element
 }

  return (
    <div className="ui four item menu">

      <a onClick={handleClick} 
      className={"item " + (selected==="profile" ? "active" : null)} 
      id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={handleClick} 
      className={"item " + (selected==="photo" ? "active" : null)}
      id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={handleClick} 
      className={"item " + (selected==="cocktails" ? "active" : null)}
      id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={handleClick} 
      className={"item " + (selected==="pokemon" ? "active" : null)}
      id="pokemon"> 
        <i className="themeisle large icon" id="pokemon"/>
      </a>

    </div>
  )
}

export default MenuBar

// import React from 'react'


// const MenuBar = ({selected, select}) => {

//   const handleClick = (event) => {
//     select(event.target.id)
//   }

//   return (
//     <div className="ui four item menu">
//       <a className={"item " + (selected==="profile" ? "active" : null)} 
//          id="profile"
//          onClick={handleClick}>
//         <i className="user large icon" id="profile"/>
//       </a>

//       <a className={"item " + (selected==="photo" ? "active" : null)} 
//          id="photo"
//          onClick={handleClick}>
//         <i className="photo large icon" id="photo"/>
//       </a>

//       <a className={"item " + (selected==="cocktail" ? "active" : null)} 
//          id="cocktail"
//          onClick={handleClick}>
//         <i className="cocktail large icon" id="cocktail"/>
//       </a>

//       <a className={"item " + (selected==="pokemon" ? "active" : null)} 
//          id="pokemon"
//          onClick={handleClick}> 
//         <i className=" themeisle large icon" id="cocktail"/>
//       </a>
//     </div>
//   )

// }

// export default MenuBar

