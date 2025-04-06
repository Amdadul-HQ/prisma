import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const pagenation = async () => {
    

    // offset pagenation
    const offsetData = await prisma.post.findMany({
        skip:0,
        take:2
    })

    console.log({offsetData});

    // cursor base pagenation
    const cursorData = await prisma.post.findMany({
        skip:0,
        take:2,
        cursor:{
            id:1
        }
    })

    console.log({cursorData});

    // ascding data
    const ascdingData = await prisma.post.findMany({
        orderBy:{
            id:'asc'
        }
    })

    console.log({ascdingData});

    // desnding data 
    const desndingData = await prisma.post.findMany({
        orderBy:{
            id:'desc'
        }
    })

    console.log({desndingData});
}