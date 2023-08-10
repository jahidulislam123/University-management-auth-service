import express, { Application, Request, Response } from 'express'
import userRouter from './app/modules/users/users.route'
import usersService from './app/modules/users/users.service'
import cors from 'cors'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Application routers

app.use('/api/v1/users', userRouter)
//HI
//testing
app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '9999',
    password: '1234',
    role: 'student',
  })
  res.send('Working successfully ')
})

export default app
