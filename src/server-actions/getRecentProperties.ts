import { prisma } from "@/database/db"

export async function getRecentProperties() {
    try {
        const properties = await prisma.property.findMany({
            take:6,
            orderBy:{
                createdAt:"desc"
            }
        })

        if(!properties){
            return null
        }

        return properties
    } catch (error) {
        console.log("failed te fetch recent properties")
    }
}