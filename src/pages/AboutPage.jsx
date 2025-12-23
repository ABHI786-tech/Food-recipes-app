import React from 'react'




const AboutPage = () => {




  return (
    <div className='flex flex-col justify-center text-center  '>
      <div>AboutPage</div>
      <div> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, assumenda corrupti, ratione ipsam illo reprehenderit sit labore blanditiis harum maiores facilis id commodi voluptas recusandae debitis quam ab voluptates quidem.</div>
      <br /><br />
      <div>
        <form>
          <label htmlFor="">name</label>
          <input className='input' type="text" />
          <label htmlFor="">gender</label>
          <input className='input' type="text" />
        </form>
      </div>

    </div>
  )
}

export default AboutPage