import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    const post = await prisma.post.findMany()

    console.log(post);
}

main()
