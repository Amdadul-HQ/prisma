import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const batchTransaction = async()=> {

    const createUser = prisma.user.create({
        data:{
            userName:"Rimon",
            email:"rimonamdadul301@gmail.com",
            age:22
        }
    })

    const updateUser = prisma.user.update({
        where:{
            id:3
        },
        data:{
            age:30
        }
    })

    const [userData,updatedData] = await prisma.$transaction([createUser,updateUser])

    console.log(updatedData,userData);
    
}


batchTransaction()