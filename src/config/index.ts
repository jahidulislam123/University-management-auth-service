import dotenv from 'dotenv'
import path from 'path'
// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  // eslint-disable-next-line no-undef
  port: process.env.PORT,
  // eslint-disable-next-line no-undef
  databse_url: process.env.DATABASE_URL,
  // eslint-disable-next-line no-undef
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
}
