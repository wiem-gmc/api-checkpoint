import axios from 'axios'
import React, { useEffect, useState } from 'react'
const UserList = () => {
    const [users, setUsers] = useState([])
   
      const getUser = async () => {
            try {
                  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                  console.log(response);
                  setUsers(response.data);
                  
            } catch (err) {
                  console.log("error", err);
            }
      }
      useEffect(() => {
            getUser();  
      },[])

return (
  <div className='container'>
            <div className="m2">
            <ul className="menu-bar">
            <h1 style={{textAlign:'center'}}>Members: {' '}</h1>
            <hr></hr>
            </ul>
             </div>

            {users.map((user,i) => (
                        
                  <div key={i}>
                                                
                  <div className="card"  style={{textAlign:'start'}}>
                  <div className="card-text">
                  <span className="date">phone:{ user.phone}</span>
                                    <h2> {user.name}</h2>
                              
                                    <p>email: {user.email}</p><br />
                                    <p>website: { user.website}</p>
                        <p> address:{ user.address.street} { user.address.suite} { user.address.city} { user.address.zipcode}</p>
                  </div>
                  <div className="card-stats">
                  <div className="stat">
                        <div className="value">Company:</div>
                        <div className="type">{user.company.name}</div>
                  </div>
                  <div className="stat border">
                        <div className="value">catchPhrase:</div>
                        <div className="type">{user.company.catchPhrase}</div>
                  </div>
                  <div className="stat">
                        <div className="value">bs:</div>
                        <div className="type">{user.company.bs}</div>
                  </div>
                  </div>
                  </div>
                  </div>
                  ))}
            </div>
      )
}

export default UserList