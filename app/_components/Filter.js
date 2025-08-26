"use client"
import { useSearchParams , useRouter } from "next/navigation"
import { usePathname } from "next/navigation";

export default function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeFilter = searchParams.get("capacity") ?? "all";
    function handleFilter(filter) {
      const params = new URLSearchParams(searchParams);
      params.set("capacity", filter);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

  return (
    <div className="flex border-primary-800 border-2">
        <Button filter="all" handleFilter={handleFilter} activeFilter={activeFilter}>all cabins</Button>
        <Button filter="small" handleFilter={handleFilter} activeFilter={activeFilter}>small</Button>
        <Button filter="medium" handleFilter={handleFilter} activeFilter={activeFilter}>medium</Button>
        <Button filter="large" handleFilter={handleFilter} activeFilter={activeFilter}>large</Button>
    </div>
  )
}

 function Button({handleFilter , filter , activeFilter , children}) {
  return (
    <button className={`px-5 py-4 ${activeFilter === filter ? "bg-primary-700 text-gray-50" : ""}`} onClick={()=>handleFilter(filter)}>
        {children}
    </button>
  )
}
