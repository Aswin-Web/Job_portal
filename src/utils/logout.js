
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'


const Logout = () => {
    const navigate = useNavigate();
    localStorage.removeItem('user');
    useEffect(() => {
        
        return () => {
            return navigate("/");
            
        };
    });
  return ;
}

export default Logout


