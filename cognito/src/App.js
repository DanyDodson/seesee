import React from 'react'
import { Account } from './components/Accounts'
import Signup from './components/Signup'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import Status from './components/Status'
import Settings from './components/Settings'
import Attributes from './components/Attributes'
import RandomNumber from './components/RandomNumber'

const App = () => {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
      <ForgotPassword />
      <Settings />
      <Attributes />
      <RandomNumber />
    </Account>
  )
}

export default App