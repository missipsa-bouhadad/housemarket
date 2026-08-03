import { create } from "zustand";

interface CreatePropertyModal {
  isOpen: boolean;
  openCreateProperty: () => void;
  closeCreateProperty: () => void;
}

export const useCreatePropertyModal = create<CreatePropertyModal>((set) => ({
  isOpen: false,
  openCreateProperty: () => set({ isOpen: true }),
  closeCreateProperty: () => set({ isOpen: false }),
}));
