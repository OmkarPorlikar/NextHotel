import PlacesList from "@/components/Home/PlacesList";
export default function PlacesListPage() {
  return (
    <div className="pt-10"> {/* To prevent header overlap */}
      <PlacesList />
    </div>
  );
}
