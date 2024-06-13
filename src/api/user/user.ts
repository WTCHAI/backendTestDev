import { NextApiRequest , NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Handler (req: NextApiRequest, res : NextApiResponse){
    if(req.method === "POST"){
        try {
            const { name, email , studentId } = req.body;
            const user = await prisma.user.create({
              data: {
                name,
                email,
                studentId,
              },
            });
            res.status(201).json(user);
          } catch (error : any) {
            res.status(500).json({ error: error?.message });
          }
    }
    else if (req.method === "GET"){
        try {
            const users = await prisma.user.findMany();
            res.status(200).json(users);
          } catch (error : any) {
            res.status(500).json({ error: error?.message });
          }
    }
}