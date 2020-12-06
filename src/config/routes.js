
import home  from '../components/home'
import login from '../components/login'
import notMatch from '../components/notFound'

export default [
  {
   path :'/',
   component : home,
   exact : true
  },

  {
    path :'/login',
    component : login,
    exact : true
   },
 

   {
    component : notMatch,
   },
]