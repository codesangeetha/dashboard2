import React from "react";
export default function Filter() {


    const arr = ["abc", "hg", "efgh"];

    const newArr = arr.filter((i) => {
        /* if(i.length < 4){
            return true;
        } else {
            return false;
        } */
        return (i.length < 4);
    });

    const newArr2 = arr.filter((i) => {
        return (i.length == 4);
    });



    const arr2 = ["abc", "hg", "adfc", "efgh"];
    const newArr3 = arr2.filter((i) => {
        const first = i[0];
        /* if(first == "a"){
            return true;
        } else {
            return false;
        }
 */
        return (first == "a");
    });



    const arr3 = [33, 23, 45, 98, 84];
    const newArr4 = arr3.filter((i) => {
        return (i > 50);
    })


    const arr4 = ["abc", "hg", "dfc", "efgh"];
    const newArr5 = arr4.filter((i) => {
        const len = (i.length) - 1;
        const last = i[len];
        return last == "c";
    })


    const arr5 = ["abc", "hg", "dfg", "efgh", "pqh"];
    const newArr6 = arr5.filter((i) => {
        const len = (i.length) - 1;
        const last = i[len];
        return last == "g" || last == "h";

    })


    const arr6 = [
        {
            name: "Ram",
            age: 20,
            mark: 100
        },
        {
            name: "John",
            age: 15,
            mark: 90
        },
        {
            name: "Sita",
            age: 22,
            mark: 95
        },
        {
            name: "Romi",
            age: 18,
            mark: 75
        }
    ]

    const newArr7 = arr6.filter((i) => {
        return i.mark > 90;
    })

    const newArr8 = arr6.filter((i) => {
        return i.age >= 20;
    })

    const newArr9 = arr6.filter((i) => {
        const len = (i.name).length;
        return len == 4;
    })



    return (
        <div>
            {JSON.stringify(newArr)} <br />
            {JSON.stringify(newArr2)} <br />
            {JSON.stringify(newArr3)} <br />
            {JSON.stringify(newArr4)} <br />
            {JSON.stringify(newArr5)} <br />
            {JSON.stringify(newArr6)} <br />
            {JSON.stringify(newArr7)} <br />
            {JSON.stringify(newArr8)} <br />
            {JSON.stringify(newArr9)} <br />

        </div>
    )
}
