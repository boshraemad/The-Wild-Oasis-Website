import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

export default async function CabinList({filter}) {
    const filterValue = filter? filter : "all";
    const cabins = await getCabins();
    let displayCabins;
    if(filterValue === "all") displayCabins = cabins;
    if(filterValue === "small") displayCabins = cabins.filter(cabin => cabin.maxCapacity <=3)
    if(filterValue === "medium") displayCabins = cabins.filter(cabin => cabin.maxCapacity >=4 && cabin.maxCapacity<=7)
    if(filterValue === "large") displayCabins = cabins.filter(cabin => cabin.maxCapacity >=8)

    if(!cabins.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
    {displayCabins.map((cabin) => (
      <CabinCard cabin={cabin} key={cabin.id} />
    ))}
  </div>
  )
}
