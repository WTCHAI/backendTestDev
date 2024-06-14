'use client'

import React, { useEffect, useState } from 'react'

import { User, UserResponse } from '@/interface/user'


type Props = {}

export default function UserRender({}: Props) {

  const [users, setUsers] = useState<User[] | undefined>([])

  const onFetchUsers = async ()=>{
    const response  = await fetch('/api/users/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result : UserResponse = await response.json()
    console.log(result)
    if (result.status === 200){
      setUsers(result.data)
    }
  }
  useEffect(()=>{
    onFetchUsers()
  },[])

  return (
    <section>
      <h1>
        All users list 
      </h1>
      {
        users?.map((user) => {
          return (
            <div key={user.id}>
              <p>Name  : {user.name}</p>
              <p>Email : {user.email}</p>
              <p>Password : {user.password}</p>
            </div>
          )
        })
      }
    </section>
  )
}