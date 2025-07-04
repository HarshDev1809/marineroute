"use client";
import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes, selectStatus } from "@/store/slices/routeSlice";
import insertAt from "@/utils/insertAt";
import removeAt from "@/utils/removeAt";

export default function MapSideBar({}) {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const [collapsed, setCollapsed] = useState(true);
  const [coordinates, setCoordinates] = useState([
    [,],
    [,    ],
  ]);

  const handleCoordsChange = (e, name, key) => {
    const { value } = e.target;

    setCoordinates((prev) => {
      const updated = prev.map((coord) => [...coord]);

      updated[key][name === "lat" ? 1 : 0] = Number(value);

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRoutes(coordinates));
  };

  const handleAddCoordinates = (index) => {
    setCoordinates((prev) => {
      let copy = prev.map((coord) => [...coord]);
      copy = insertAt(copy, index + 1, [null, null]);
      return copy;
    });
  };

  const handleCoordinateRemove = (index) => {
    setCoordinates((prev) => {
      let copy = prev.map((coord) => [...coord]);
      copy = removeAt(copy, index);
      return copy;
    });
  };

  return collapsed ? (
    <div className="h-full flex flex-col bg-gray-300 gap-2 py-2 pl-2">

    
    <div
      className="flex flex-col justify-between bg-white items-center py-2 px-1 cursor-pointer h-full rounded border border-gray-400"
      onClick={() => setCollapsed(false)}
    >
      <Button type="monogram-logo" onClick={() => setCollapsed(false)} />
      <Button type="open" onClick={() => setCollapsed(false)} />
    </div>
    <div className="py-2 px-1 border rounded border-gray-400 bg-white">

    <Button type="home-logo" border = {false}/>
    </div>
    </div>
  ) : (
    <div className="flex flex-col gap-2 p-2 h-full">
      <div className="flex items-center justify-between border-b border-gray-300">
        <div className="flex flex-row">
        <Button type="home-logo" border = {false}/>
        <Button type="logo" />
        </div>
        <Button type="close" onClick={() => setCollapsed(true)} />
      </div>
      <form
        className="border grow h-full z-10 border-gray-300 text-black p-2 rounded flex flex-col "
        onSubmit={handleSubmit}
      >
        <h1 className="w-full text-center font-semibold text-xl pb-2">Check Route</h1>
        <ul className="grow">
          {coordinates.map(([lon, lat], index) => (
            <li key={index} className=" flex flex-col">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Input
                  legend="Longitute"
                  onChange={(e) => handleCoordsChange(e, "lon", index)}
                  value={lon}
                />
                <Input
                  legend="Latitude"
                  value={lat}
                  onChange={(e) => handleCoordsChange(e, "lat", index)}
                />
                <Button
                  type="delete"
                  onClick={() => handleCoordinateRemove(index)}
                  disabled={coordinates.length <= 2}
                />
              </div>
              <div className="flex items-center justify-center">
                <Button
                  type="add-coordinates"
                  onClick={() => handleAddCoordinates(index)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-6">
          <Button type="submit" />
        </div>
      </form>
    </div>
  );
}
