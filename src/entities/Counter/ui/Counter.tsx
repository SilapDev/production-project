import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface CounterProps {
  className?: string
}
export const Counter = ({ className }: CounterProps) => {
  const dispatch = useDispatch()

  const counterValue = useSelector(getCounterValue)

  const increamnet = () => {
    dispatch(counterActions.increament())
  }

  const decreament = () => {
    dispatch(counterActions.decreament())
  }

  return (
      <div >
          <h1> value = {counterValue} </h1>
          <Button onClick={increamnet} >
              increamnet
          </Button>
          <Button onClick={decreament} >
              decremnet
          </Button>
      </div>
  )
}
