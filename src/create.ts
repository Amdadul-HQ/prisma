import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // Create single post
    // const result = await prisma.post.create({
    //     data:{
    //         title:"This is title",
    //         authorName:"Amdadul",
    //         content:"this is content for this post"
    //     }
    // })

    const createMany = await prisma.post.createMany({
        data:[
            {
                title:"This is title one",
                authorName:"Amdadul",
                content:"this is content for this post one"
            },
            {
                title:"This is title two",
                authorName:"Amdadul",
                content:"this is content for this post two"
            },
            {
                title:"This is title Three",
                authorName:"Amdadul",
                content:"this is content for this post three"
            }
        ]
    })

    console.log(createMany);

}

main()