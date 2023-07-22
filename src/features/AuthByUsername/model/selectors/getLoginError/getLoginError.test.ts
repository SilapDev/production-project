import { type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'
import { getLoginError } from './getLoginError'

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      login: {
        error: 'error'
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })
})
