import Image from "next/image";

export const Loader = () => {
  return (
    <div className="p-5 md:p-20 mb-5 h-full gap-y-4 flex flex-col items-center justify-center">
      <div className="relative h-10 w-10 animate-spin">
        <Image fill alt="Logo" src="/logo.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        S-Gen is thinking...
      </p>
    </div>
  );
};
