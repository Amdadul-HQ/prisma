import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const groupBy = async() => {
    // const group = await prisma.post.groupBy({
    //     by:['published'],
    //     _count:{
    //         title:true
    //     },
    //     having:{
    //         published:true
    //     }
    // })

    // console.log(group);

    const groupBy = await prisma.user.groupBy({
        by:'age',
        // _count:{
        //     userName:true
        // },
        having:{
            age:{
                _sum:{
                    gt:20
                }
            }
        }
    })

    console.log(groupBy);
}


groupBy()