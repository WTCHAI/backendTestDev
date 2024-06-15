
import { NextApiRequest, NextApiResponse } from "next";
import { prismaDb } from "@/lib/db";

import bcrypt from 'bcrypt'

import { User, UserResponse } from "@/interface/user";


export default async function handler(req : NextApiRequest, res : NextApiResponse) {

    if (req.method === 'GET'){
        try{
            const response = await prismaDb.user.findMany()
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

            const encryptedPasswd = await bcrypt.hash(payload.password,Number(process.env.SALT_ROUNDS))
            const response = await prismaDb.user.create({
                data : {
                    name : payload.name,
                    email : payload.email,
                    password : encryptedPasswd,
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