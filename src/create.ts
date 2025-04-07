import { PrismaClient, UserRole } from "@prisma/client";

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

    // const createMany = await prisma.post.createMany({
    //     data:[
    //         {
    //             title:"This is title one",
    //             authorName:"Amdadul",
    //             content:"this is content for this post one"
    //         },
    //         {
    //             title:"This is title two",
    //             authorName:"Amdadul",
    //             content:"this is content for this post two"
    //         },
    //         {
    //             title:"This is title Three",
    //             authorName:"Amdadul",
    //             content:"this is content for this post three"
    //         }
    //     ]
    // })

    // console.log(createMany);

    // const creatUser = await prisma.user.create({
    //     data:{
    //         userName:"user2",
    //         email:"user2@ph.com",
    //         role:UserRole.user
    //     }
    // })

    // console.log(creatUser);

    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio:"This is Bio",
    //         userId:3
    //     }
    // })

    // console.log(createProfile);

    // const createCategory = await prisma.category.create({
    //     data:{
    //         name:"proggraming"
    //     }
    // })

    // console.log(createCategory);


    const createPost = await prisma.post.create({
        data:{
            title:"This is Post Number One",
            content:"This is first post with content",
            authorId:1,
            postCategory:{
                // create:{
                    // categoryId:3
                    // category:{
                    //     connect:{
                    //         id:1
                    //     }
                    // }
                // }
                create:[
                    {
                        categoryId:3
                    },
                    {
                        categoryId:2
                    },
                    {
                        categoryId:1
                    },
                ]
            }
        },
        include:{
            postCategory:true
        }
    })

    console.log(createPost);
}

main()