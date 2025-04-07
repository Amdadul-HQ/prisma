import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const relationalQueries = async () => {
    // pluent api
    // const result = await prisma.user.findUnique({
    //     where:{
    //         id:1
    //     }
    // }).post()

    // include method
    // const result = await prisma.user.findUnique({
    //     where:{
    //         id:1
    //     },
    //     include:{
    //         post:true
    //     }
    // })

    const result = await prisma.user.findMany({
        include:{
            post:{
                where:{
                    published:true
                }
            }
        }
    })

    console.dir(result,{depth:Infinity});
}

relationalQueries()