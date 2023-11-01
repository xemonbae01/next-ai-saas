import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="p-20 mb-5 border h-full bg-muted rounded-lg flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image fill alt="Empty" src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
