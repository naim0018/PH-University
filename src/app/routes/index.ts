import  { Router } from 'express'
import { userRoute } from '../../modules/user/user.route'
import { StudentRoutes } from '../../modules/student/student.route'
import { AcademicSemesterRoutes } from '../../modules/academicSemester/academicSemester.route'
const router = Router()


// router.use('/academic-semester',AcademicSemesterRoutes)


const moduleRoute =[
    {
        path:'/user',
        route:userRoute
    },
    {
        path:'/student',
        route:StudentRoutes
    },
    {
        path:'/academic-semester',
        route:AcademicSemesterRoutes
    }
]

moduleRoute.forEach((route) => router.use(route.path,route.route))

export default router