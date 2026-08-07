"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

interface EmptyStateProps {
  title: string;
  filter?: boolean;
}

export default function EmptyState({ title, filter = false }: EmptyStateProps) {
  const router = useRouter();
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-24 gap-10">
      <h2 className="mt-6 text-3xl font-bold">{title}</h2>
      {filter && (
        <Button variant="outline" onClick={() => {router.push("/marketplace");}}>
          Clear filters
        </Button>
      )}
    </div>
  );
}