import { useState } from "react";

export default function Thailand() {
  const [imageChange, setImageChange] = useState(0);
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
        src="https://static.toiimg.com/photo/59737203.cms"
      />
      {!expand && (
        <div className="EssentialInfo">
          <ul>
            <li>Author: Koohii</li>
            <li>Place: Thailand</li>
            <li>Time: Eventually</li>
          </ul>
        </div>
      )}
      {expand && (
        <div className="text">
          <p>
            My father was quiet often there. When we talked about it he always
            mentions the beautiful view and general attitude there. Unfortunetly
            Thailand has a bit of an bad rep because quite often people only
            talk about the sexscene there but i just wanna see the food and just
            the overall feel of the country. I would like to know if it is true
            that people there are very kind to forneigers.
          </p>
        </div>
      )}
    </div>
  );
}
