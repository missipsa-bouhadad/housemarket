import { prisma } from "@/database/db";
import { getCurrentUser } from "@/server-actions/getCurrentUser";
import {
  CloudinaryUploadResult,
  uploadToCloudinary,
} from "@/services/cloudinary";
import { NextRequest, NextResponse } from "next/server";

function normalizePropertyType(value: string): string {
  return value.trim().toLowerCase();
}

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

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const search = searchParams.get("search");
  const propertyType = searchParams.get("propertyType");
  const location = searchParams.get("location");
  const address = searchParams.get("address");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");

  const properties = await prisma.property.findMany({
    where: {
      ...(propertyType && {
        propertyType: normalizePropertyType(propertyType),
      }),
      ...(location && {
        location: {
          contains: location,
          mode: "insensitive",
        },
      }),
      ...(address && {
        address: {
          contains: address,
          mode: "insensitive",
        },
      }),
      ...(minPrice && {
        price: {
          gte: Number(minPrice),
        },
      }),
      ...(maxPrice && {
        price: {
          lte: Number(maxPrice),
        },
      }),
      ...(search && {
        OR: [
          {
            title: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            location: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            address: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(properties)
}
