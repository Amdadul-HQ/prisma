import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const result = await prisma.post.create({
    //     data:{
    //         title:"This is title",
    //         authorName:"Amdadul",
    //         content:"this is content for this post"
    //     }
    // })
    const post = await prisma.post.findMany()

    console.log(post);
}

main()