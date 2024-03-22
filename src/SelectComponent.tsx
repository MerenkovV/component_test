import React, { useEffect, useState } from "react";
import "./styles/Options/OptionsStyles.scss";
import { ObjType } from "./types/types";
import useOutsideClick from "./utils/outsideClickHook";
import { ReactComponent as Triangle } from "./images/triangle.svg";
import {
  cancelHandler,
  deleteTargetHandler,
  openHandler,
} from "./utils/handlers";

type SizeType = "small" | "medium" | "large";
type ColorType = "dark" | "light" | "color";

interface Props {
  size?: SizeType;
  color?: ColorType;
  objArray: Array<ObjType>;
  callback?: (info: ObjType[] | []) => void;
}

const SelectComponent = ({
  color = "dark",
  size = "large",
  objArray,
  callback,
}: Props) => {
  const wrapperRef = useOutsideClick(() => {
    setOpen(false);
  });

  const [objects, setObjects] = useState<ObjType[]>(objArray);
  const [selectedObj, setSelectedObj] = useState<ObjType[] | []>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const foundObj = objArray.filter((obj) =>
      obj.label.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
    setObjects(foundObj);
  }, [objArray, search]);

  useEffect(() => {
    callback && callback(selectedObj);
  }, [callback, selectedObj]);

  return (
    <div className={`${color} ${size}`}>
      <div
        ref={wrapperRef}
        className={`select ${open ? "rounded" : ""}`}
        onClick={() => setOpen(true)}
      >
        <div className="select__target-wrapper">
          {selectedObj.length > 0 &&
            selectedObj.map((obj, index) => (
              <div
                key={obj.value}
                className={`select__target`}
                onClick={(e) =>
                  deleteTargetHandler(e, obj, setSelectedObj, selectedObj)
                }
              >
                {obj.label}
              </div>
            ))}
        </div>

        <input
          className={`select__input`}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div
          className={`select__icon ${open ? "inverted" : ""}`}
          onClick={(e) => openHandler(e, setOpen)}
        >
          <Triangle />
        </div>

        <div
          className={`select__cancel${
            selectedObj.length === 0 && search === "" ? "_closed" : ""
          }`}
          onClick={(e) => cancelHandler(e, setSearch, setSelectedObj)}
        ></div>

        <div className={`select__items${open === false ? "_closed" : ""}`}>
          {objects.map((obj, index) => {
            return (
              <p
                key={obj.value}
                className={`select__item ${
                  selectedObj.find((select) => select.value === obj.value) !==
                  undefined
                    ? "target"
                    : ""
                } ${obj.image ? "imaged" : ""}`}
                onClick={() => {
                  if (
                    selectedObj.find((select) => select.value === obj.value) ===
                    undefined
                  ) {
                    setSelectedObj([...selectedObj, obj]);
                  } else {
                    setSelectedObj(
                      selectedObj.filter((select) => select.value !== obj.value)
                    );
                  }
                }}
              >
                {obj.image ? (
                  <img
                    src={obj.image}
                    alt={obj.label}
                    className="select__image"
                  />
                ) : (
                  ""
                )}
                {obj.label}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
