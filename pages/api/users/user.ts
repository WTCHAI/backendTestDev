import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, email, password, studentId } = req.body;
      console.log('req.body', req.body)
      // Hash the password before storing it

      const user = await prisma.user.create({
        data: {
          name,
          email,
          studentId,
        },
      });

      res.status(201).json({
        status: 'success',
        message: 'User created successfully',
        data: user,
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  } else if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json({
        status: 'success',
        data: users,
      });
    } catch (error: any) {
      res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({
      status: 'error',
      message: `Method ${req.method} Not Allowed`,
    });
  }
}
