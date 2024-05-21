import React, {  useEffect} from 'react'
// import UserContext from './UserContext';
const FirstHook = () => {
   const [count , setCount] = React.useState(0);

   useEffect(()=>{

   },[count])
   console.log(`increase ${count}`);

  //  const user = useContext(UserContext);
  return (
    <div>
        {/* {user.name && <h1>Author Name {user.name}</h1>} */}
        <h2>how many banana is there {count}</h2>
        <button onClick={()=> setCount(count+1)}>click me</button>
    </div>
  )
}

export default FirstHook