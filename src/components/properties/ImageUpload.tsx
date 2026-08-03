import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  preview: null | string;
  onChange: (file: File) => void;
}

export default function ImageUpload({ preview, onChange }: ImageUploadProps) {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onChange(file);
  };
  return (
    <div className="relative w-full">
      <label
        htmlFor="image-upload"
        className="relative flex flex-col items-center justify-center gap-2 cursor-pointer rounded-2xl min-h-80 border-2 border-dashed border-gray-300 hover:border-black"
      >
        {!preview && (
          <>
            <TbPhotoPlus size={36} />
            <p>Click to upload</p>
            <p className="text-sm text-gray-300">Upload one image</p>
          </>
        )}

        {preview && (
          <Image
            alt="Preview"
            src={preview}
            fill
            className="object-cover object-center rounded-2xl shadow-2xl"
          />
        )}
      </label>

      <input
        type="file"
        id="image-upload"
        className="hidden"
        onChange={handleUpload}
      />
    </div>
  );
}
