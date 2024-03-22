import { ObjType } from "../types/types";

type setSelectType = React.Dispatch<React.SetStateAction<ObjType[] | []>>;
type setSearchType = React.Dispatch<React.SetStateAction<string>>;
type setOpenType = React.Dispatch<React.SetStateAction<boolean>>;

export const cancelHandler = (
  e: React.MouseEvent,
  setSearch: setSearchType,
  setSelectedObj: setSelectType
) => {
  e.stopPropagation();
  setSearch("");
  setSelectedObj([]);
};

export const deleteTargetHandler = (
  e: React.MouseEvent,
  obj: ObjType,
  setSelectedObj: setSelectType,
  selectedObj: [] | ObjType[]
) => {
  e.stopPropagation();
  setSelectedObj(selectedObj.filter((select) => select.value !== obj.value));
};

export const openHandler = (e: React.MouseEvent, setOpen: setOpenType) => {
  e.stopPropagation();
  setOpen((prev) => !prev);
};
