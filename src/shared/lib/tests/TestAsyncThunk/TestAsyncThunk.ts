import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

type ActionCreaterType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreaterType<Return, Arg, RejectedValue>

  constructor (actionCreater: ActionCreaterType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreater
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}
