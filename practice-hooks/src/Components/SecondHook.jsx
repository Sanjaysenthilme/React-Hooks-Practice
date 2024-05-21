import React,{useState,useEffect} from 'react'

const SecondHook = () => {
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res =>  res.json())
        .then(data => setUsers(data))
        console.log('run');
    },[])
  return (
    <>
        <ul>
            {users.map((items,keys)=>
            <li key={keys}>
                {items.id} -- {items.name}
            </li>)}
        </ul>
    </>
      
  )
}

export default SecondHook