import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId , getSettings} from "../_lib/data-service";

export default async function Reservations({cabin}) {
    const [settings , bookedDates] = await Promise.all([getSettings() , getBookedDatesByCabinId(cabin.id)])
  return (
    <div className="grid grid-cols-2 mt-8 border border-primary-800 min-h-[400px]">
        <DateSelector settings={settings} bookedDtaes={bookedDates} cabin={cabin}/>
         <ReservationForm cabin={cabin}/>
    </div>
  )
}
