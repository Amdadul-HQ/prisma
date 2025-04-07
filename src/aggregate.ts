import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const aggragates = async () => {
    // finding avg age
    // const avgAge = await prisma.user.aggregate({
    //     _avg:{
    //         age:true
    //     }
    // })

    // console.log(avgAge);
    
    // finding sum of age
    // const sumAge = await prisma.user.aggregate({
    //     _sum:{
    //         age:true
    //     }
    // })

    // console.log(sumAge);

    // finding count 
    // const countAge = await prisma.user.aggregate({
    //     _count:{
    //         age:true
    //     }
    // })

    // console.log(countAge);

    // find number of record
    // const count = await prisma.user.count()

    // console.log(count);


    // find max age
    // const maxAge = await prisma.user.aggregate({
    //     _max:{
    //         age:true
    //     }
    // })

    // console.log(maxAge)
    
    // find min age
    // const minAge = await prisma.user.aggregate({
    //     _min:{
    //         age:true
    //     }
    // });

    // console.log(minAge);
    
}

aggragates()