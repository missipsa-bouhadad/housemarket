
import { PropertyType } from '@/types/propertyType';
import clsx from 'clsx';

interface PropertyTypeCardProps {
  item: PropertyType;
  selected?:boolean
  onClick?:()=> void
}

export default function PropertyTypeCard({ item,selected,onClick }: PropertyTypeCardProps) {
    const Icon = item.icon
  return (
    <button
      className={clsx(
        "flex flex-col items-center my-6 border border-gray-300 rounded-xl p-4 gap-2 hover:border-2 hover:cursor-pointer",
        { "border-2 border-primary bg-gray-50": selected, "bg-gray-100": !selected },
      )}
      type='button'
      onClick={onClick}
    >
        {<Icon size={18}/>}
        {item.label}
    </button>
  );
}
