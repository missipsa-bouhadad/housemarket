"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import Modal from "../modals/Modal";
import Button from "../ui/Button";

interface DeletePropertyButtonProps {
  propertyId: string;
  propertyTitle: string;
}

export default function DeletePropertyButton({
  propertyId,
  propertyTitle,
}: DeletePropertyButtonProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteProperty = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/properties/${propertyId}`);
      toast.success("Property deleted successfully");
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Delete property"
        className="absolute top-4 right-4 z-30 p-3 rounded-full bg-white/70 text-red-600 hover:bg-white cursor-pointer transition-all duration-300"
      >
        <FaTrash className="h-4 w-4" />
      </button>

      <Modal
        title="Delete property"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="my-4">
          <p>
            Are you sure you want to delete{" "}
            <span className="font-semibold">{propertyTitle}</span> ? This
            action cannot be undone.
          </p>

          <div className="flex gap-4 mt-6">
            <Button
              fullWidth
              className="border border-gray-300"
              onClick={() => setIsOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              fullWidth
              variant="outline"
              className="bg-red-600! hover:bg-red-500!"
              loading={loading}
              onClick={deleteProperty}
            >
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
