import Introduction from '@/containers/introduction'
import Story from '@/containers/story'
import Welcome from '@/containers/welcome'

export default function Home() {
  return (
    <div className='container'>
      <Welcome />
      <Introduction />
      <Story />
    </div>
  )
}
