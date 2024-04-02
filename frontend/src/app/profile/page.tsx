import ProfileSection from '@/components/profile-section'
import Story from '@/containers/story'
import ProfileSectionProvider from '@/store/ProfileSectionContext '

const About = () => {
  return (
    <div className="container">
      <ProfileSectionProvider>
        <ProfileSection />
      </ProfileSectionProvider>
      <Story />
    </div>
  )
}

export default About