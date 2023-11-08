import React from "react";
export default function TeachersList() {

    const [arr, setArr] = React.useState([]);

    const [details, setDetails] = React.useState({
        name: "",
        subject: "",
        age: ""
    }
    )

    const [textboxVal, setTextboxVal] = React.useState("");

    const [indexNo, setIndexNo] = React.useState(-1);

    const [searchBox, setSearchBox] = React.useState("");

    const [displaymsg, setDisplayMsg] = React.useState("");

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
            subject: "",
            age: ""
        });
    }



    console.log(arr);

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
            <li>Name:{item.name} Subject:{item.subject} Age:{item.age}
                <button onClick={() => { deleteFn(index); }}>Delete</button>
                <button onClick={() => { editFn(index); }}>Edit</button>


            </li>
        )
    });


    function deleteFn(index) {
        const newArr = [...arr];
        newArr.splice(index, 1);
        setArr(newArr);
    }

    function editFn(index) {
        const obj = arr[index];
        setTextboxVal(obj.subject);
        setIndexNo(index);
    }
    function handleChange2(event) {
        setTextboxVal(event.target.value);
    }

    function editItemFn() {
        const newArr = [...arr];
        const obj = newArr[indexNo];
        const newObj = { ...obj, subject: textboxVal };
        newArr[indexNo] = newObj;
        setArr(newArr);
    }
    function searchFn(index) {
        setDisplayMsg(searchBox);
    }

    function handleChange3(event) {
        setSearchBox(event.target.value);
    }

    return (
        <div>
            Name: <input type="text" onChange={handleChange} name="name" value={details.name} />
            <div>
                Subject :<input type="text" onChange={handleChange} name="subject" value={details.subject} />
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
            <input type="text" onChange={handleChange2} value={textboxVal} /> <button onClick={editItemFn}>Edit item</button>

            <div>
                <input type="text" onChange={handleChange3} value={searchBox} /> <button onClick={searchFn}>Search</button>
            </div>
            <div>
                {displaymsg}
            </div>
        </div>

    )
}