import React,{createContext,useState} from 'react'

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user,setUser] = useState({name:'sanjay senthil'});
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContext;