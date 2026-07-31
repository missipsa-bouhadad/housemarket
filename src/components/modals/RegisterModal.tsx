"use client"

import { useAuthModal } from '@/store/useAuthModal'
import Modal from './Modal'


export default function RegisterModal() {
    const {openRegister, closeRegister, isRegisterOpen} = useAuthModal()
  return (
    <Modal title={"Register"} isOpen={isRegisterOpen} onClose={closeRegister}>
      <div></div>
    </Modal>
  );
}
