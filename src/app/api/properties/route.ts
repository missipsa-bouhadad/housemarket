import { prisma } from "@/database/db";
import { getCurrentUser } from "@/server-actions/getCurrentServer";
import {
  CloudinaryUploadResult,
  uploadToCloudinary,
} from "@/services/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const propertyType = formData.get("propertyType") as string;
    const listingType = formData.get("listingType") as string;
    const price = formData.get("price") as string;
    const bedrooms = formData.get("bedrooms") as string;
    const bathrooms = formData.get("bathrooms") as string;
    const parkingSpaces = formData.get("parkingSpaces") as string;
    const area = formData.get("area") as string;
    const location = formData.get("location") as string;
    const address = formData.get("address") as string;
    const image = formData.get("image") as File;

    if (
      !title ||
      !description ||
      !propertyType ||
      !listingType ||
      !price ||
      !bedrooms ||
      !bathrooms ||
      !location ||
      !address ||
      !image
    ) {
      return NextResponse.json(
        { error: "all fields are required" },
        { status: 400 },
      );
    }

    const imageData: CloudinaryUploadResult = await uploadToCloudinary(image);

    await prisma.property.create({
      data: {
        title,
        description,
        propertyType,
        listingType,
        price: Number(price),
        bedrooms: Number(bedrooms),
        bathrooms: Number(bathrooms),
        parkingSpaces: parkingSpaces ? Number(parkingSpaces) : 1,
        area: area ? Number(area) : null,
        location,
        address,
        image: imageData.secure_url,
        ownerId: currentUser.id,
      },
    });

    return NextResponse.json({ status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 },
    );
  }
}
