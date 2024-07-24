import { useState } from "react";

export default function Vietnam() {
  const [expand, setExpand] = useState(false);

  const handleImgClicked = () => {
    setExpand(!expand);
  };
  return (
    <div onClick={handleImgClicked}>
      {`${expand ? "Click to Return" : "Click to Read more"}`}
      <img
        className="img "
        alt=""
        src="https://www.tripsavvy.com/thmb/-H-xOXGvC-RPf6lhiDhVxDZ-vWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/when-to-travel-vietnam-5ab887c131283400375b1126.jpg"
      />
      {!expand && (
        <div className="EssentialInfo">
          <ul>
            <li>Author: Koohii</li>
            <li>Place: Vietnam</li>
            <li>Time: To be considered</li>
          </ul>
        </div>
      )}
      {expand && (
        <div className="text">
          <p>
            Vietnam.. sad to know or think about the fact what happend there.
            Even to this day just googling the name the majority of result are
            the war that happend there. Not a lot of people think of that
            Vietnam when considering traveling somewhere. Certainly no New York
            landscape.. but that is exactly why it worth way more to visit then
            just another metropolis.
          </p>
        </div>
      )}
    </div>
  );
}
