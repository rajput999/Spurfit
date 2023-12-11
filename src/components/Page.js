import React from 'react'

const Page = () => {
    const pageStyle={
      marginLeft: '6rem', 
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '1rem',
      marginTop: '1rem',
      position:'relative',
      height:'20rem',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      fontSize: '25px',
      fontWeight: 'bold'
    }
  return (
    <div style={pageStyle}>Coming Soon</div>
  )
}

export default Page