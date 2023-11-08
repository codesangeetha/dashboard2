import React from "react";
export default function Map() {


    const arr = ["abc", "hg", "efgh"];


    const newArr = arr.map((i) => {
        const len = i.length;
        const newItem = `${i}-${len}`;
        return newItem;
    });

    const newArr2 = arr.map((i) => {
        const fLetter = i[0];
        return fLetter;
    });

    const newArr3 = arr.map((i) => {
        const len = i.length;
        const lLetter = i[len - 1];
        return lLetter;
    });

    const newArr4 = arr.map((i) => {
        const len = i.length;
        const obj = {
            name: i,
            lengh: len
        };
        return obj;
    });

    const newArr5 = arr.map((item) => {
        const len = item.length;
        const sum = len + 2;
        return sum;
    })

    const newArr6 = arr.map((item) => {
        const len = item.length;
        const square = len * len;
        const val = `${square} ${item}`;
        return val;
    })

    const newArr7 = arr.map((i) => {
        const len = i.length + i.length;
        const item = `${i}${i}`;
        const obj = {
            name: item,
            lengh: len
        };
        return obj;
    });

    const newArr8 = arr.map((i) => {
        const len = i.length;
        const last = i[len-1];
        const first = i[0];
        const newName = `${last}${i}${first}`;
        const newLen = newName.length;
        const obj = {
            name: newName,
            lengh: newLen
        };
        return obj;
    });


    return (
        <div>
            {JSON.stringify(newArr)} <br />
            {JSON.stringify(newArr2)}<br />
            {JSON.stringify(newArr3)}<br />
            {JSON.stringify(newArr4)}<br />
            {JSON.stringify(newArr5)}<br />
            {JSON.stringify(newArr6)}<br />
            {JSON.stringify(newArr7)}<br />
        </div>
    )
}




/* ["abc", "hg", "efgh"] => [5, 4, 6]

["abc", "hg", "efgh"] => ["9abc", "4hg", "16efgh"]


 ["abc", "hg", "efgh"] => [
  {
  name: "abcabc",
  length: 6
  },
  {
  name: "hghg",
  length: 4
  },
  {
  name: "efghefgh",
  length: 8
  }
  ]


*/