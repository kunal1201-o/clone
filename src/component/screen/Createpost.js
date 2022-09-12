import React from 'react'

const Createpost = () => {
  return (
    <div className='card input-field' style={{
     
        maxWidth:"500px",
        padding:"20px",
        textAlign:"center",
        margin:"30px auto"

    }}>
     <input type="text" placeholder='title' />
     <input type="text"placeholder='body' />
     <div class="file-field input-field">
      <div class="btn">
        <span>upload Image</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text"/>
      </div>
    </div>
    <button class="btn waves-effect waves-light">Submit Post</button>
      
    </div>
  )
}

export default Createpost