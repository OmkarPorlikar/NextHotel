import RoomsList from "@/components/Home/RoomsList";


import Breadcrumb from "@/components/SEO/Breadcrumbs";
import { getBreadcrumbs } from "@/components/SEO/breadcrumb.config";
export default function RoomsListPage() {

  const breadcrumbs = getBreadcrumbs("rooms");

  return (
    <div className="pt-10"> {/* To prevent header overlap */}
      <Breadcrumb items={breadcrumbs} />

      <RoomsList />
    </div>
  );
}
