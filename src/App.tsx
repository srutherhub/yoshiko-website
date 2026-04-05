import "./App.css";
import Breadcrumbs from "./BreadCrumbs";

function App() {
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
          <p>Yoshiko Gasa Rutherford</p>
          <a href="/gallery">Gallery</a>
        </div>
      </div>
    </div>
  );
}

export default App;
