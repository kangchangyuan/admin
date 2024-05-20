const PageRoutes = [
{
  path:'home',
  name:'home',
  component:()=>import('@/pages/home/Home.vue'),
},
{
  path:'settings/user',
  name:'UserSetting',
  component:()=>import('@/pages/settings/user/UserSettingView.vue'),
}
]

export default PageRoutes