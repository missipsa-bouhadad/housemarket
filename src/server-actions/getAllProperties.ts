import axios from "axios";

interface GetAllPropertiesParams {
  search?: string;
  propertyType?: string;
  location?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
}

export async function getAllProperties(params?:GetAllPropertiesParams) {
    try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/properties`,
          {
            params: {
              search: params?.search,
              propertyType: params?.propertyType,
              location: params?.location,
              address: params?.address,
              minPrice: params?.minPrice,
              maxPrice: params?.maxPrice,
            },
          },
        );

        return response.data;
    } catch (error) {
        console.log("failed to fetch properties in marketplace page")
    }
}
