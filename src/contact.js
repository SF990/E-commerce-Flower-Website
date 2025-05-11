import React, { useState } from 'react';
import './contact.css';
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated , loginWithRedirect  } = useAuth0();
  const [user$,setUser] = useState(
    {
        Name: '' , Email: '' , Subject: '' , Message: ''
  })
  let name,value
  const data =(e) =>
  {
    name = e.target.name;
    value = e.target.value;
    setUser({...user$, [name]:value})
  }
  const senddata = async(e)=>
  {
    const {Name, Email, Subject, Message} = user$;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        Name, Email, Subject, Message
      })
    }
    const res = await fetch('https://e-commerce-contact-3852e-default-rtdb.firebaseio.com/Message.json' , options)
     console.log(res)
     if(res){
      alert('Your Message Sent')
     }
     else{
      alert('An Error Occured')
     }
     
  }

  return (
    <>
      <div className='contact_container'>
        <div className='contant'>
             <h2># Contact Us</h2>
          <div className='form'>
            <form method='POST'>
              <input type='text' name='Name' placeholder='Enter Your Full Name' value={user$.Name} required autoComplete='off' onChange={data} ></input>
              <input type='email' name='Email' placeholder='Enter Your E-mail' value={user$.Email} required autoComplete='off' onChange={data}></input>
              <input type='text' name='Subject' placeholder='Enter Your Subject' value={user$.Subject} required autoComplete='off' onChange={data}></input>
              <textarea name='Message' placeholder='Your Message' required value={user$.Message} autoComplete='off' onChange={data}></textarea>
              {
                isAuthenticated ?
                <button type="submit" onClick={senddata}>Send</button>
                : <button type="submit" onClick={()=> loginWithRedirect()}>Login to Send</button>

              }
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
