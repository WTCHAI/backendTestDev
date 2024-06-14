'use client'

import React from 'react'
import { Form, Input, Button, message } from 'antd';


import { userFormType , UserResponse } from '@/interface/user';

export default function AddingUser(){
  const [form] = Form.useForm();

  const onFinishForm = async (values: userFormType) => {
      const response : UserResponse = await fetch('/api/users/user', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 200) { 
        form.resetFields()
        message.success('User added successfully')    
      }else if (response.status === 404){
        message.error('Error adding user')
      }
  }

  return (
    <section className="">
      <Form form={form} onFinish={onFinishForm} className="flex flex-col gap-y-[2vh] ">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
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
            Add User
          </Button>
        </Form.Item>
      </Form>
    </section>
  )

}
