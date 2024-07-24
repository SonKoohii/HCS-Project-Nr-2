import Japan from "./Japan";
import Vietnam from "./Vietnam";
import Thailand from "./Thailand";
import Southkorea from "./Southkorea";
import Maplibre from "./Maplibre";

export default function Home() {
  return (
    <div className="container">
      <Japan />
      <Southkorea />
      <Thailand />
      <Vietnam />
      <Maplibre />
    </div>
  );
}
