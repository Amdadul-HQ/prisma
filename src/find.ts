import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
     // find all post with condition
     const posts = await prisma.post.findMany({
      
    })
    console.log(posts);

    // find all post with condition
    const post = await prisma.post.findMany({
        where:{
            published:false
        }
    })
    console.log({post});

    // find fast is like javascript find method it will returen the fast element
    const findFast = await prisma.post.findFirstOrThrow({
        where:{
            published:true
        }
    })

    console.log({findFast});

    // fine Unique is like it will only find by Unique property like id slug 
    const findUnique = await prisma.post.findUniqueOrThrow({
        where:{
            id:3
        },
        select:{
            title:true,
            content:true,
            authorName:true
        }
    })

    console.log({findUnique});
}

main()