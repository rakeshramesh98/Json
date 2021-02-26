import fs from "fs";
//fs = require("fs");
const data = {
  application: {
    //object
    name: "website", //string
    bootstrap: true, //boolean
    rootComponent: {
      //object
      name: "viewport", //string
      bindings: { input: [], output: [] },
      properties: [],
      methods: [],
      components: [],
    },
    bindings: { input: [], output: [] },
  },
};

var i = 0;

export default function getJsonIterable(
  obj,
  fillIncrement,
  parent,
  parentString
) {
  let returnArray = [];
  let refString =
    parent !== null && parent !== ""
      ? `${parentString}['${parent}']`
      : `${parentString}`;

  switch (typeof obj) {
    case "object":
      if (Array.isArray(obj)) {
        returnArray.push(addFill(fillIncrement, parent, ["[", refString]));

        fillIncrement++;
        obj.map((value, key) => {
          returnArray = [
            ...returnArray,
            ...getJsonIterable(
              value,
              fillIncrement,
              key,
              `${parentString}['${parent}']`
            ),
          ];
        });
        returnArray.push(addFill(fillIncrement, parent, ["]"]));
      } else {
        returnArray.push(addFill(fillIncrement, parent, ["{", refString]));
        fillIncrement++;
        for (const [key, value] of Object.entries(obj)) {
          returnArray = [
            ...returnArray,
            ...getJsonIterable(value, fillIncrement, key, refString),
          ];
        }

        returnArray.push(addFill(fillIncrement, parent, ["}"]));
      }

      break;

    default:
      returnArray = [addFill(fillIncrement, parent, [obj, refString])];
      break;
  }
  //fucntion's return value
  return returnArray;
}

const arr = getJsonIterable(data, 0, "", "data");
//console.log(JSON.stringify(arr,null,4))
fs.writeFileSync("data.js", JSON.stringify(arr, null, 4));

function addFill(fillIncrement, parent, valueArray) {
  let values = [];
  let fills = [];
  if (parent == null || parent == "") {
    fillIncrement--;

    values = valueArray;
  } else {
    values = [parent, ...valueArray];
  }
  if (fillIncrement > 0) {
    fills = new Array(fillIncrement).fill("");
  }
  return [...fills, ...values];
}
