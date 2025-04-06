import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const deleteData = async () => {

    // single delete
    const singleDelete = await prisma.post.delete({
        where:{
            id:1
        }
    })

    console.log(singleDelete);

    // many delete 
    const manyDelete = await prisma.post.deleteMany({
        where:{
            authorName:"Amdadul"
        }
    })

    console.log(manyDelete);
}

deleteData()