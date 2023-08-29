import axios from 'axios'

axios.defaults.baseURL = 'https://api.spotify.com/v1'

axios.interceptors.response.use(
  async (value) => {
    return value
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log('401 in axios interceptors')

      originalRequest._retry = true
      const access_token = await getAccessToken()
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
      return axios(originalRequest)
    }

    return error
  },
)

export default axios

async function getAccessToken() {
  const res = await axios.post(
    'https://accounts.spotify.com/api/token',
    {
      grant_type: 'client_credentials',
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_CLIENT_SECRET,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
  return res.data.access_token
}
