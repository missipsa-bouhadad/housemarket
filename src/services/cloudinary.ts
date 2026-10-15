import cloudiary from "../lib/cloudinary";

export type CloudinaryUploadResult = {
  secure_url: string;
  public_id: string;
};

export async function uploadToCloudinary(
  file: File,
): Promise<CloudinaryUploadResult> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString("base64");
  const dataURL = `data:${file.type};base64,${base64}`;

  try {
    const result = await cloudiary.uploader.upload(dataURL, {
      folder: "housemarket",
      transformation: [{ format: "webp" }],
    });

    return {
      secure_url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.log("Cloudinary upload error", error);
    throw new Error("Failed to upload new image");
  }
}

// extracts the public_id from a secure_url
function getPublicIdFromUrl(url: string): string | null {
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-z0-9]+$/i);
  return match ? match[1] : null;
}

export async function deleteFromCloudinary(imageUrl: string): Promise<void> {
  const publicId = getPublicIdFromUrl(imageUrl);
  if (!publicId) return;

  try {
    await cloudiary.uploader.destroy(publicId);
  } catch (error) {
    console.log("Cloudinary delete error", error);
  }
}
