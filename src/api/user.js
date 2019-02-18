import axios from 'axios'

export default {
  getUserInfo: async (callback) => {
    const response = await axios.get('/user')
    callback({ username: response.data.data.username })
  }
}
