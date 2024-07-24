import { useState } from "react";

export default function Southkorea() {
  const [imageChange, setImageChange] = useState(0);
  const [expand, setExpand] = useState(false);

  const handleImgClicked = () => {
    setExpand(!expand);
  };

  const SouthImages = [
    "https://etichotels.com/journal/wp-content/uploads/2023/11/10-Best-Cities-to-Visit-in-South_Korea-ETIC-Hotels.jpg",
    "https://www.90daykorean.com/wp-content/uploads/2017/08/wpid-tumblr_m7sefrmsro1qkyzm3o1_1280.webp",
    "https://cdn.getyourguide.com/img/tour/fa06cc513168e5c3.jpeg/146.jpg",
  ];

  return (
    <div onClick={handleImgClicked}>
      {`  ${expand ? "Click to Return" : " Click to Read more"}`}
      <img
        src={SouthImages[imageChange]}
        className="img img__above"
        alt="Southkorea Image"
      />

      {!expand && (
        <div className="EssentialInfo">
          <ul>
            <li>Author:Koohii</li>
            <li>Place: Southkorea</li>
            <li>Time:To be thought out</li>
          </ul>
        </div>
      )}

      {expand && (
        <div className="text">
          <p>
            Knowing now which the good korea and which one the bad is makes it
            easier to decide where to go. I want to the how the overall
            infratructure is there. Just like or similar to Japan what i heard
            people there are supposed to be very kind and polite to each other.
            I definitly would like to see it with my own eyes.
          </p>
        </div>
      )}
    </div>
  );
}
