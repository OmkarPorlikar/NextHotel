import RoomsList from "@/components/Home/RoomsList";

export default function RoomsListPage() {
  return (
    <div className="pt-10"> {/* To prevent header overlap */}
      <RoomsList />
    </div>
  );
}
