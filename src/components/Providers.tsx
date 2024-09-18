"use client"
import store from '@/scripts/redux/store'
import React, { FC } from 'react'
import { Provider } from 'react-redux'

type Props = {
    children: React.ReactNode
}

const Providers: FC<Props> = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
)
}

export default Providers