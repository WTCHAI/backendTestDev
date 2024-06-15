'use client'
import React from 'react'


import { Button, Form, Input } from 'antd'

import { UserResponse, userFormType } from '@/interface/user'

export default function SignIn() {
    const [form] = Form.useForm()

    const onFinish = async (values : userFormType)=>{
        console.log(values)
        const response = await fetch('/api/auth/signup',{
            method : "POST",
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        const result : UserResponse = await response.json()
        if (result.status === 200 ){

        }else if (response.status === 400){
            
        }
        form.resetFields()
    }

    return (
        <section className='h-screen flex items-center justify-center'>
            <Form form={form} onFinish={onFinish} className="login-form flex flex-col items-center justify-center">
                <Form.Item
                    name="name"
                    label="name"
                    rules={[{ required: true, message: 'Please input a valid name!'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>

        </section>
    )
}