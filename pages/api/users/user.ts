import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";

import { User, UserResponse } from "@/interface/user";

const prisma = new PrismaClient();

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

    if (req.method === 'GET'){
        try{
            const response = await prisma.user.findMany()
            return res.json({
                data : response,
                message : 'Users fetched successfully',
                status : 200
            })
        }catch(err){
            return res.json({
                message : 'Error getting users',
                status : 404
            })
        }
    }else if (req.method === 'POST'){
        try{
            const payload : User = req.body
            const response = await prisma.user.create({
                data : {
                    name : payload.name,
                    email : payload.email,
                    password : payload.password,
                    studentId : payload.studentId
                }
            })
            return res.json({
                data : response,
                message : 'User added successfully',
                status : 200
            })
        }catch(err){
            return res.json({
                message : 'Error adding user',
                status : 404
            })
        }
    }
}