import { HiOutlineHomeModern } from "react-icons/hi2";
import Button from "./Button";


interface EmptyStateProps {
    title:string,
}

export default function EmptyState({ title}:EmptyStateProps) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24">
      <h2 className="mt-6 text-3xl font-bold">
        {title}
      </h2>
    </div>
  )
}
