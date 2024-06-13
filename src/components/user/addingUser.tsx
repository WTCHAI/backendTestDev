'use client'

import React from 'react'
import { Form, Input, Button, message } from 'antd';


import { userFormType } from '@/interface/user';

export default function AddingUser(){
  const [form] = Form.useForm();

  const onFinishForm = async (values: userFormType) => {
    console.log('Received values:', values);
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success('User added successfully!');
        form.resetFields();
      } else {
        const errorData = await response.json();
        message.error(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      message.error('Error adding user');
    }
  };

  const onLogsForm = (values : userFormType)=>{
    console.log("form", values)
  }

  return (
    <section className="">
      <Form form={form} onFinish={onFinishForm} className="flex flex-col gap-y-[2vh]">
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
