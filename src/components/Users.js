import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') == 'active'
  return (
    <div>
        <h1>Users 1</h1>
        <h1>Users 2</h1>
        <h1>Users 3</h1>
        <Outlet />

        <div>
            <button onClick={() => setSearchParams({filter: 'active'})}>Active users</button>
            <button onClick={() => setSearchParams({})}>Reset filter</button>
        </div>
        {
            showActiveUsers ? (
                <h2>Show active users</h2>                
            ) : (
                <h2>Show all users</h2>
            )
        }
    </div>
  )
}

export default Users