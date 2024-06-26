import  { Router } from 'express'
import { userRoute } from '../../modules/user/user.route'
import { StudentRoutes } from '../../modules/student/student.route'
import { AcademicSemesterRoutes } from '../../modules/academicSemester/academicSemester.route'
import { AcademicFacultyRoute } from '../../modules/academicFaculty/academicFaculty.route'
import { AcademicDepartmentRoute } from '../../modules/academicDepartment/academicDepartment.route'
import { FacultyRoute } from '../../modules/faculty/faculty.route'
import { AdminRoute } from '../../modules/admin/admin.route'
import { AuthRouter } from '../../modules/auth/auth.route'
const router = Router()


// router.use('/academic-semester',AcademicSemesterRoutes)


const moduleRoute =[
    {
        path:'/user',
        route:userRoute
    },
    {
        path:'/auth',
        route:AuthRouter
    },
    {
        path:'/student',
        route:StudentRoutes
    },
    {
        path:'/faculty',
       route:FacultyRoute
    },
    {
        path:'/admin',
       route:AdminRoute
    },
    {
        path:'/academic-semester',
        route:AcademicSemesterRoutes
    },
    {
        path:'/academic-faculty',
        route:AcademicFacultyRoute
    },
    {
        path:'/academic-department',
        route:AcademicDepartmentRoute
    }
]

moduleRoute.forEach((route) => router.use(route.path,route.route))

export default router