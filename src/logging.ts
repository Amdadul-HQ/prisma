import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:[
        {
            emit:"event",
            level:"query"
        }
    ]
})

prisma.$on("query",(e)=>{
    console.log(e)
    console.log("query",e.query);
    console.log("Duration",e.duration,"ms");
    console.log("Time Stamp",e.timestamp);
})


const main = async () => {
    // find all post with condition
    const posts = await prisma.post.findMany({
     
   })
//    console.log(posts);

}

main()