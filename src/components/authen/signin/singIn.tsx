'use client'
import React from 'react'


import { Button, Form, Input } from 'antd'

export default function SignIn() {
    const [form] = Form.useForm()

    const onFinish = async ()=>{
        
    }

    return (
        <section>
            <Form form={form} onFinish={onFinish} className="login-form">
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