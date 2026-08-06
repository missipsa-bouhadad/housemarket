import { prisma } from "@/database/db";
import { getCurrentUser } from "./getCurrentUser";

export async function getUserProperties () {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser?.id) {
          return null;
        }
        const propreties = prisma.property.findMany({
          where: { ownerId: currentUser.id },
          orderBy:{
            createdAt:'desc'
          }
        });

        return propreties
    } catch (error) {
        console.log("failed to fetch propreties")
        return [];
    }
}