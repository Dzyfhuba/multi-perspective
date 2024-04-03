import Axios from './axios'

const getUser = async () => {
  const user = await Axios.get('/auth/user')
    .then((res) => {
      return res.data
    })
    .catch(() => {
      return false
    })

  return user
}

export default getUser