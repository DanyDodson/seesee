import mongooseLoader from '#root/loaders/mongoose'
import expressLoader from '#root/loaders/express'

export default async ({ expressApp }) => {
  await mongooseLoader()
  console.info('🚀🚀 [users_db] loaded and connected 🚀🚀')
  await expressLoader({ app: expressApp })
  console.info('🚀🚀 [users_api] express setup and loaded 🚀🚀')
}
