import { useState, useEffect } from "react";

export default function Japan() {
  const [currentImage, setCurrentImage] = useState(0);
  const [expand, setExpand] = useState(false);

  const handleImgClicked = () => {
    setExpand(!expand);
  };

  const images = [
    "https://www.planetware.com/photos-large/JPN/japan-attractions-hiroshima-itsukushima.jpg",
    "https://www.pelago.co/img/products/JP-Japan/10-day-private-sightseeing-tour-in-japan-more-than-60-attractions/750571fb-d3f7-4c67-84c5-77f0279f45fb_10-day-private-sightseeing-tour-in-japan-more-than-60-attractions.jpg",
    "https://blog.japanwondertravel.com/wp-content/uploads/2016/07/timo-volz-DGsqL2j028E-unsplash-1200x800.jpg",
  ];

  return (
    <div onClick={handleImgClicked}>
      {`  ${expand ? "Click to Return" : " Click to Read more"}`}
      <img
        src={images[currentImage]}
        className="img img__above"
        alt="Japan Image"
      />

      {!expand && (
        <div className="EssentialInfo">
          <ul>
            <li>Author:Koohii</li>
            <li>Place: Japan</li>
            <li>Time: Soon TM</li>
          </ul>
        </div>
      )}

      {expand && (
        <div className="text">
          <p>
            I personally want to experience Japan because i was always amazed by
            the culture and general attitude of the people there. The things
            that i want to see are the old architectures and the overall saying
            of the cultures politeness. Besides that just want to feel the
            difference between the Western rude almost aggresive nature to the
            calm and collective site of japanese people.
          </p>
        </div>
      )}
    </div>
  );
}
