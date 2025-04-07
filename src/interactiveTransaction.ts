import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
    const result = await prisma.$transaction(async(tx)=>{
        const getAllPost =await tx.post.findMany({
            where:{
                published:true
            }
        })

        const createUser = await tx.user.create({
            data:{
                age:21,
                userName:"Refat",
                email:"rifat@gmail.com"
            }
        })

        const updateUser = await tx.user.update({
            where:{
                id:1
            },
            data:{
                age:20
            }
        })

        const createPost = await tx.post.create({
            data:{
                title:"Create interactive transaction",
                content:"This is the interactive transaction",
                authorId:5,
            }
        })

        return{createUser,updateUser,createPost,getAllPost}
    })

    console.log(result);
}


interactiveTransaction()