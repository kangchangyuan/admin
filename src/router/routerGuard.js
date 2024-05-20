import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


NProgress.configure({showSpinner:false})

const SetupRouterGuard = (router)=>{
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    next()
    
  })
  router.afterEach(() => {
    NProgress.done()
  })
}

export default SetupRouterGuard