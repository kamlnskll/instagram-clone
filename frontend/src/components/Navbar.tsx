import React from 'react'

const menuItems: any =[

  {name: "Home",
  icon: "Home Icon"},
  
  {name: "Search",
  icon: "Search Icon"},
  
  {name: "Explore",
  icon: "Explore Icon"},
  
  {name: "Messages",
  icon: "Messages Icon"},
  
  {name: "Notifications",
  icon: "Notifications Icon"},
  
  {name: "Create",
  icon: "Create Icon"},
  
  {name: "Profile",
  icon: "Profile Picture Icon"},
  
  ]


const Navbar = () => {


  return (
    <div>
      {console.log(menuItems)}
      {menuItems.map((item, index) => { 
        return (
        <div className='flex gap-4'>
        <h1>{item.icon}</h1>
        <h1>{item.name}</h1>
        </div>
      )})}
    </div>
  )
}

export default Navbar