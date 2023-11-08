import React from "react";
export default function StudentsList() {

    const [arr, setArr] = React.useState([]);

    const [details, setDetails] = React.useState({
        name: "",
        class: "",
        age: ""
    }
    )

    /*   const [newBoxVal, setnewBoxVal] = React.useState(""); */

    const [indexNo, setIndexNo] = React.useState(-1);


    const [newBoxVal, setNewboxVal] = React.useState({
        name: "",
        class: "",
        age: ""
    })


    const [searchBox, setSearchBox] = React.useState("");


    function handleChange(event) {
        setDetails(preVal => {
            return {
                ...preVal,
                [event.target.name]: event.target.value
            }
        })
    }

    function buttonFn() {
        setArr(preVal => {
            return [...preVal, details];
        })

        setDetails({
            name: "",
            class: "",
            age: ""
        });
    }

    const newArr = arr.filter((i)=> {
        const str = searchBox.toLowerCase();
        const nameStr = i.name.toLowerCase();
        if(nameStr.includes(str)){
           return true; 
        } else {
            return false; 
        }
    });


    const result = newArr.map((item, index) => {
        return (
            <li>Name:{item.name} Class:{item.class} Age:{item.age}
                <button onClick={() => { deleteFn(index); }}>Delete</button>
                <button onClick={() => { editFn(index); }}>Edit</button>


            </li>
        )
    })

    function deleteFn(index) {
        const newArr = [...arr];
        newArr.splice(index, 1);
        setArr(newArr);
    }

    function editFn(index) {
        const obj = arr[index];
        /*  setnewBoxVal(obj.age); */

        setNewboxVal(obj);
        setIndexNo(index);
    }
    function handleChange2(event) {
        setNewboxVal(preVal => {
            return {
                ...preVal,
                [event.target.name]: event.target.value
            }
        })
    }

    function editItemFn() {
        const newArr = [...arr];
        newArr[indexNo] = newBoxVal;
        setArr(newArr);
    }

    function handleChange3(event) {
        setSearchBox(event.target.value);
    }

    function searchFn(index) {
      /*   setDisplayMsg(searchBox); */
    };
    return (
        <div>
            Name: <input type="text" onChange={handleChange} name="name" value={details.name} />
            <div>
                Class :<input type="text" onChange={handleChange} name="class" value={details.class} />
            </div>
            <div>
                Age :<input type="text" onChange={handleChange} name="age" value={details.age} />
            </div>
            <div>
                <button onClick={buttonFn}>Add to list</button>
            </div>
            <div>
                <ul>
                    {result}
                </ul>
            </div>
            <input type="text" placeholder={"Name"} onChange={handleChange2} value={newBoxVal.name} name="name" /> <button onClick={editItemFn}>Edit item</button>
            <div>
                <input type="text" placeholder={"Class"} onChange={handleChange2} value={newBoxVal.class} name="class" />
            </div>
            <div>
                <input type="text" placeholder={"Age"} onChange={handleChange2} value={newBoxVal.age} name="age" />
            </div>
            <div>
                <input type="text" onChange={handleChange3} value={searchBox} /> <button onClick={searchFn}>Search</button>
            </div>
        </div>

    )
}