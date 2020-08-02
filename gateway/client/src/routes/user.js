import asyncHandler from 'express-async-handler'

import auth from '#root/middleware/auth'

import {
  signupUser,
  signinUser,
  getAuthUser,
  changeEmail,
  resetPassword,
  deleteUser,
} from '#root/controllers/user'

import { Router } from 'express'

export default (app, route = Router()) => {

  app.use('/user', route)

  route.post(
    '/signup',
    asyncHandler(signupUser)
  )

  route.post(
    '/signin',
    asyncHandler(signinUser)
  )

  route.get(
    '/',
    auth,
    asyncHandler(getAuthUser)
  )

  route.put(
    '/change-email',
    auth,
    asyncHandler(changeEmail)
  )

  route.put(
    '/reset-password',
    asyncHandler(resetPassword)
  )

  route.delete(
    '/',
    auth,
    asyncHandler(deleteUser)
  )
}
