import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const updates = async () => {

    // single post update
    // const updatePost = await prisma.post.update({
    //     where:{
    //         id:2
    //     },
    //     data:{
    //         title:"This is Title 2",
    //         content:"This post content is 2"
    //     }
    // })

    // console.log(updatePost);
    // many post update
    const updatePosts = await prisma.post.updateMany({
        where:{
            authorName:"Amdadul"
        },
        data:{
            published:true
        }
    })

    console.log(updatePosts);
}

updates();