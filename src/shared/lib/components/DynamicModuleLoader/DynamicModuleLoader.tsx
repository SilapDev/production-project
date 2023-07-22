import { type Reducer } from '@reduxjs/toolkit'
import {
  type StateSchemaKey,
  type ReduxStoreWithManager
} from 'app/providers/StoreProvider'
import React, { useEffect, type FC } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducerList
  removeAfterUnmount?: boolean
}
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props

  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@INIT ${String(name)} reducer` })
    })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.add(name, reducer)
          dispatch({ type: `@DESTROY ${String(name)} reducer` })
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}
