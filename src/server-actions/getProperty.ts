import { prisma } from "@/database/db";

export async function getProperty(propertyId:string) {
    try {
        const property = prisma.property.findFirst({
          where: {
            id: propertyId,
          },
          include:{
            owner:{
                select:{
                    id:true,
                    name:true,
                    email:true,
                    image:true
                }
            }
          }
        });

        if (!property) {
          return null;
        }

        return property;
    } catch (error) {
        console.log("failed to fetch property")
        return null
    }
}