import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from '../Components/auth/Home'
import AdminLogin from '../Components/auth/AdminLogin'
import AdminLogout from '../Components/auth/AdminLogout'
import TeacherLogin from '../Components/auth/TeacherLogin'
import TeacherLogout from '../Components/auth/TeacherLogout'
import TeacherHeader from '../Components/teacher/Header'
import AdminHeader from '../Components/admin/Header'
import Odform from '../Components/teacher/Odform'
import TeacherProfile from '../Components/teacher/TeacherProfile'



export default function BaseRouter() {

    const isLogin = localStorage.getItem('isLogin')
    const teacherLogin =localStorage.getItem('teacherLogin')
    console.log(isLogin)
    return(
      <>
      
      <Switch>  
      <Route exact path="/" component={Home} />
      <Route
    path='/admin'
    render={({ match: { url } }) => (
      <> 
    <Switch>
        <Route path={`${url}/`} component={AdminLogin} exact />
        <Route path={`${url}`+ `/logout`} component={AdminLogout} />
        <Route path={`${url}`+`/manage_teacher`} >
           <><AdminHeader /><TeacherProfile/></>
        </Route>
        <Route path={`${url}`+`admin_dashboard`} >
           <><AdminHeader /></>
        </Route>
    </Switch>
      </>
    )}
  />
    <Route
    path='/teacher'
    render={({ match: { url } }) => (
      <> 
    <Switch>
        <Route path={`${url}/`} component={TeacherLogin} exact />
        <Route path={`${url}`+ `/logout`} component={TeacherLogout} />
        <Route path={`${url}`+`/od_form`} >
           <><TeacherHeader /><Odform /></>
        </Route>
    </Switch>
      </>
    )}
  />
      </Switch>
      </>
    )
}
