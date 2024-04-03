import Introduction from '@/containers/introduction'
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
    </div>
  )
}
