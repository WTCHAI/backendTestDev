
import React from 'react'


import { Button, Form, Input } from 'antd'
import SignIn from '@/components/authen/signin/singIn'

type Props = {}

export default function page({}: Props) {

    return (
        <section className='flex items-center justify-center h-screen'>
            <SignIn/>
        </section>
    )
}