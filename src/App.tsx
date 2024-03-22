import React, { useState } from "react";
import "./styles/App.scss";
import { ObjType } from "./types/types";
import SelectComponent from "./SelectComponent";

function App() {
  const objArr: ObjType[] = [
    {
      value: "1",
      label: "First1111111111111First1111111111111",
      image:
        "https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png",
    },
    {
      value: "2",
      label: "Second",
      image: "https://cdn-icons-png.flaticon.com/512/858/858962.png",
    },
    {
      value: "3",
      label: "Third",
      image:
        "https://alvarotrigo.com/blog/assets/imgs/2021-10-06/javascript-select-option-share.png",
    },
    { value: "4", label: "Fourth ", image: "" },
    { value: "5", label: "Fifth", image: "" },
    { value: "6", label: "Sixth", image: "" },
    { value: "7", label: "First", image: "" },
    { value: "8", label: "Second", image: "" },
    { value: "9", label: "Third", image: "" },
    { value: "10", label: "Fourth ", image: "" },
    { value: "11", label: "Fifth", image: "" },
    { value: "12", label: "Sixth", image: "" },
  ];

  const [state, setState] = useState<ObjType[] | []>([]);

  const getInfo = (info: ObjType[] | []) => {
    setState(info);
  };

  return (
    <div className="App">
      <p style={{ color: "#fff" }}>afakfapwjkgopawjgpoawjgpaowjgpoawjga</p>
      <SelectComponent
        callback={getInfo}
        size="small"
        color="dark"
        objArray={objArr}
      />
      <p style={{ color: "#fff" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque
        natus minima voluptatem animi blanditiis aliquid at pariatur quibusdam
        deserunt. Numquam perspiciatis eos illo inventore fuga doloribus ullam,
        vero quaerat totam asperiores debitis quasi, at odit dolor suscipit
        minus distinctio sit dolorem libero odio perferendis rem? Quis
        consequuntur quae aliquid sed porro, quam voluptatibus corporis at ex
        est omnis laudantium eveniet? Amet beatae fuga quaerat ut exercitationem
        minus reiciendis praesentium dignissimos voluptas debitis mollitia
        maxime ea, laboriosam velit voluptates non saepe commodi nihil dolor
        vero! Laboriosam aliquam a beatae sunt laudantium omnis vel numquam
        tempora? Saepe modi autem animi nobis.
      </p>
      <SelectComponent size="medium" color="color" objArray={objArr} />
      <SelectComponent color="light" objArray={objArr} />
    </div>
  );
}

export default App;
