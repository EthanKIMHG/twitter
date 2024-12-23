import { Layout } from '@components/Layout'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
 

import Router from './Router'
import { app } from './firebaseApp';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const auth = getAuth(app);   
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth?.currentUser);
  const [init, setInit] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true)
    })
  }, [auth])
  
  return (
    <Layout>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated}/> : "loading"}
    </Layout>
  )
}

export default App
