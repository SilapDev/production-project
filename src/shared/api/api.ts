import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'https://production:8000'

export const $api = axios.create({
  baseURL,
  headers: {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
  }
})
