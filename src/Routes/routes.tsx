
import React, { useContext } from 'react'
import { UserContext } from '../Providers/User'
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom'
import { RoutesProps } from '../Types'

const Route = ({ isPrivate = false, component: Component, ...rest }: RoutesProps) => {
    const { userToken } = useContext(UserContext)

    return (
        <ReactDOMRoute 
            {...rest}
            render={() => {
                return isPrivate === !!userToken? <Component/> : <Redirect to={isPrivate? '/' : '/dashboard'}/>
            }} 
        />
        
    )
}

export default Route
