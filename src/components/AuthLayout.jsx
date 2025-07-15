import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Protected({ children, authentication = true, allowedRoles = [] }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const role = useSelector((state) => state.auth.role);
  

  useEffect(() => {
    // If route is protected and user is not logged in
    if (authentication && !authStatus) {
      navigate('/login');
    }
    // If logged in but role is not allowed
    else if (allowedRoles.length && !allowedRoles.includes(role)) { // if logged in and correct role to access mil jayegi
      navigate('/unauthorized'); // 👈 show 403-like page
    }

    setLoader(false);
  }, [authStatus, role, authentication, allowedRoles, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
