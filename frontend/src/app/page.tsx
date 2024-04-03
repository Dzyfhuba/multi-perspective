import Introduction from '@/containers/introduction'
import Partners from '@/containers/partners'
import Story from '@/containers/story'
import Welcome from '@/containers/welcome'
import UserProvider from '@/store/UserContext '

export default function Home() {
  return (
    <div className='container'>
      <UserProvider>
        <Welcome />
      </UserProvider>
      <Introduction />
      <Story />
      <UserProvider>
        <Partners />
      </UserProvider>
      <div style={{ paddingBottom: 36 }}></div>
    </div>
  )
}
