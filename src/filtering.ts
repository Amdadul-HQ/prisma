import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const filtering = async () => {

    // And filtering
    // const andFiltering = await prisma.post.findMany({
    //     where:{
    //         AND:[
    //             {
    //                 title:{
    //                     contains:"One"
    //                 },
    //             },
    //             {
                    
    //                 published:true
    //             }
    //         ]
    //     }
    // });

    // console.log(andFiltering);
    //or filtering
    // const orFiltering = await prisma.post.findMany({
    //     where:{
    //         OR:[
    //             {
    //                 title:{
    //                     contains:"One"
    //                 },
    //             },
    //             {
    //                 published:true
    //             }

    //         ]
    //     }
    // });

    // console.log(orFiltering);

    // not filtering
    // const notFiltering = await prisma.post.findMany({
    //     where:{
    //         NOT:[
    //             {
    //                 title:{
    //                     contains:"One"
    //                 }
    //             }
    //         ]
    //     }
    // })
    
    // console.log(notFiltering);
    

    // start wiht
    // const startWith = await prisma.user.findMany({
    //     where:{
    //         email:{
    //             startsWith:'user1'
    //         }
    //     }
    // })
    // console.log(startWith);

    // End with
    //  const endWith = await prisma.user.findMany({
    //     where:{
    //         email:{
    //             endsWith:'1@ph.com'
    //         }
    //     }
    // })
    // console.log(endWith);

    // equal with
    const equal = await prisma.user.findMany({
        where:{
            role:{
                equals:'user'
            }
        }
    })

    console.log(equal);

}


filtering()