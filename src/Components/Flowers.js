import React from "react"
import { deleteData, postData, putData } from "../services/fetchfns";
export default function Flowers() {

    const [arr, setArr] = React.useState([]);
    const [flowerData, setFlowerData] = React.useState(
        {
            name: "",
            color: "",
            numberofpetals: "",
            size: ""
        }
    )


    React.useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch("http://localhost:8080/api/flowers")
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setArr(data);
            });
    }


    function smellFn(id) {
        const putBody = {
            "smell": true
        };
        let url = `http://localhost:8080/api/flowers/${id}`;
        putData(url, putBody)
            .then(async data => {
                console.log(data);
                fetchData();
            });
    }

    function addFn() {
        console.log(flowerData);
        const postBody = {
            "name": flowerData.name,
            "color": flowerData.color,
            "numberofpetals": flowerData.numberofpetals,
            "smell": false,
            "size": flowerData.size
        };
        postData('http://localhost:8080/api/flowers', postBody)
            .then(async data => {
                console.log(data);
                fetchData();
                setFlowerData({
                    name: "",
                    color: "",
                    numberofpetals: "",
                    size: ""
                })
            });

    }


    function deleteFn(id) {
        const url = `http://localhost:8080/api/flowers/${id}`;
        deleteData(url)
            .then(async data => {
                console.log(data);
                fetchData();
            });
    }

    function getResult(param) {

        const arr1 = arr.filter((i) => {
            return i.size == param
        })


        const result = arr1.map((item) => {

            /*             let clsNme = "result-class";
                        if (item.smell == true) {
                            clsNme = "smell-class result-class";
                        } */

            return (
                <div style={{ backgroundColor: item.color }} className="result-class">
                    <div className="title-class">
                        {item.name}
                    </div>
                    <div>
                        {item.color}
                    </div>
                    <div>
                        {item.numberofpetals}
                    </div>
                    <div>
                        {item.size}
                    </div>
                    <div>
                        {item.smell}
                    </div>
                    <div>

                        <button className="button-class" onClick={() => { deleteFn(item.id) }}>Delete</button>
                    </div>
                </div>
            )
        });
        return result
    }

    function handleAdd(event) {
        setFlowerData(preVal => {
            return {
                ...preVal,
                [event.target.name]: event.target.value
            }
        });
    }

    function deleteAll() {
        const url = "http://localhost:8080/api/flowers";
        deleteData(url)
            .then(async data => {
                console.log(data);
                fetchData();
            });
    }
    return (
        <div>
            <div className="result-class">
                <input type="text" placeholder="Name" onChange={handleAdd} name="name" value={flowerData.name} />
                <div>
                    <select id="color" onChange={handleAdd} name="color" value={flowerData.color} >
                        <option value="">Select color</option>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                        small  <option value="pink">Rose</option>

                    </select>
                </div>

                <div>
                    <select id="petals" onChange={handleAdd} name="numberofpetals" value={flowerData.numberofpetals} >
                        <option value="">Number of petals</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="11">11</option>
                        <option value="15">15</option>
                        <option value="20">20</option>

                    </select>
                </div>

                <div>
                    
                    <select id="size" onChange={handleAdd} name="size" value={flowerData.size} >
                        <option value="">Size</option>
                        <option value="small">small</option>
                        <option value="big">big</option>
                    </select>

                </div>

                <div className="button-class">
                    <button onClick={addFn}>Add</button>
                    <button className="button-class" onClick={deleteAll}>Delete All</button>
                </div>
            </div>

            <div className="right-class">
                <div className="div1-class">
                    {getResult("small")}
                </div>
                <div className="div2-class">
                    {getResult("big")}
                </div>
            </div>

        </div>
    )
}

