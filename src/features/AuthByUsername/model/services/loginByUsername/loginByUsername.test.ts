import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userValue = { username: 'admin', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'admin', password: '123' })

    // expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    // expect(result.meta.requestStatus).toBe('fulfilled')
    // expect(result.payload).toEqual(userValue)
  })
})