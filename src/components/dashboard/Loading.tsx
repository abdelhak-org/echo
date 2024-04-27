import { Skeleton } from "../ui/skeleton";

export function Loading() {
  return (
    <div className="w-full h-full  flex justify-start items-center flex-col space-y-3  by-12">
      <Skeleton className="h-[125px] w-[450px] rounded-xl bg-neutral-300" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[450px] bg-neutral-300 " />
        <Skeleton className="h-4 w-[450px] bg-neutral-300 " />
      </div>
    </div>
  )
}
