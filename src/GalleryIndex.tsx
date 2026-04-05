import Breadcrumbs from "./BreadCrumbs";

export default function GalleryIndex() {
  return (
    <div>
      <Breadcrumbs />
      <div
        style={{
          width: "100dvw",
          height: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h2>2026</h2>
          <a href="/gallery/16-grids">16 Grids</a>
        </div>
      </div>
    </div>
  );
}
