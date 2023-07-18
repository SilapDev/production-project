import { counterActions, counterReducer } from './counterSlice'
import { type CounterSchema } from '../types/counterSchema'

describe('counterSlice.test', () => {
  test(' decreamnet ', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state, counterActions.decreament())).toEqual({ value: 9 })
  })
  test(' should return with empty state ', () => {
    expect(counterReducer(undefined, counterActions.decreament())).toEqual({ value: -1 })
  })
})
