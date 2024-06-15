import { NextApiRequest, NextApiResponse } from "next";

import { prismaDb } from "@/lib/db";

import bcrypt from "bcrypt"

import { User, UserResponse, userFormType } from "@/interface/user";

export default async function handler(req : NextApiRequest,res : NextApiResponse){
    if (req.method === "POST"){
      try{
        const payload : User = await req.body.json()
        const encryptedPasswd = await bcrypt.hash(payload.password,Number(process.env.SALT_ROUNDS))

        const response = await prismaDb.user.findUnique({
          where : {
            email : payload.email,
            password : encryptedPasswd
          }
        })
        console.log(response)
        // const result :  User | null = await response.json()
        

        return res.json({
          data : response,
          message : "Sign up success fully",
          status : 200
        })
      }catch(err){  
        return res.json({
            message : "Eror sign up",
            status : 404
        })
      }
    }
}