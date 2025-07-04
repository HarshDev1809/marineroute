import MapSideBar from "@/components/MapSideBar";

export default function MapPageLayout({ children }) {
  return (
    <main className="grow flex flex-row">
      <aside className="h-full"><MapSideBar /></aside>
      {children}
    </main>
  );
}
