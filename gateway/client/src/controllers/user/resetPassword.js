import asyncHandler from 'express-async-handler'

import logger from '#root/loaders/logger'

/**
@desc reset a user password
@route PUT /user/reset-password
@auth public
*/

export default asyncHandler(async (req, res, next) => {
  logger.debug('⏳⏳ [gateway_service] calling client controller test endpoint ⏳⏳')
  const jsonMsg = '👍👍 [gateway_service] client test controller endpoint working 👍👍'
  return res.json({ msg: jsonMsg })
})