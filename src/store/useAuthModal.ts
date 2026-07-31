import { create } from "zustand";

interface AuthModalStore {
  isLogginOpen: boolean;
  isRegisterOpen: boolean;

  openLogin: () => void;
  closeLogin: () => void;

  openRegister: () => void;
  closeRegister: () => void;

  closeAll: () => void;
}

export const useAuthModal = create<AuthModalStore>((set) => ({
  isLogginOpen: false,
  isRegisterOpen: false,

  openLogin: () =>
    set({
      isLogginOpen: true,
      isRegisterOpen: false,
    }),

  openRegister: () =>
    set({
      isLogginOpen: false,
      isRegisterOpen: true,
    }),

  closeLogin: () => set({ isLogginOpen: false }),

  closeRegister: () => set({ isRegisterOpen: false }),

  closeAll: () =>
    set({
      isLogginOpen: false,
      isRegisterOpen: false,
    }),
}));
