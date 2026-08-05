export default function CardSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="h-120 rounded-4xl bg-black/5 animate-pulse" />
      ))}
    </>
  );
}
