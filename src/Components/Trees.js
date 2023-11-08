import React from "react";
import { deleteData, postData, putData } from "../services/fetchfns";
export default function Trees() {

    const [arr, setArr] = React.useState([]);
    const [treeData, setTreeData] = React.useState(
        {
            name: "",
            country: "",
            height: "",
            age: "",
            furnitureUse: false
        }
    )

    React.useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch("http://localhost:8080/api/trees")
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setArr(data);
            });
    }

    function getResult(param) {
        const arr1 = arr.filter((i) => {
            return i.height == param
        })

        /*  let bkdClr = "";
         if (param == "tall") {
             bkdClr = "darkgreen-class result-class"
         } else {
             bkdClr = "lightgreen-class result-class"
         } */

        let bkdClr = "";
        if (param == "tall") {
            bkdClr = "green"
        } else {
            bkdClr = "rgba(119, 162, 122, 0.937)";
        }
        const result = arr1.map((item) => {


let checkedcolor = "";
if(item.furnitureUse == true){
    checkedcolor = "brown"
    }else{
        checkedcolor = "white"
    }

            return (
                <div className="result-class" style={{ backgroundColor: bkdClr }} >
                    <div className="title-class" style={{ color: checkedcolor }}>
                        {item.name}
                    </div>
                    <div>
                        {item.country}
                    </div>
                    <div>
                        {item.height}
                    </div>
                    <div>
                        {item.age}
                    </div>
                    <div>
                    
                        <img className="cross-class" onClick={() => { deleteFn(item.id) }} src="https://img.freepik.com/premium-photo/cross-sign-painting-isolated-white_263357-2219.jpg" />
                    </div>

                </div>
            )
        });
        return result
    }

    function deleteFn(id) {
        const url = `http://localhost:8080/api/trees/${id}`;
        deleteData(url)
            .then(async data => {
                console.log(data);
                fetchData();
            });
    }
    function addFn() {
        console.log(treeData);
        const postBody = {
            "name": treeData.name,
            "country": treeData.country,
            "height": treeData.height,
            "age": treeData.age,
            "furnitureUse": treeData.furnitureUse
        };
        postData('http://localhost:8080/api/trees', postBody)
            .then(async data => {
                console.log(data);
                fetchData();
                setTreeData({
                    name: "",
                    country: "",
                    height: "",
                    age: "",
                    furnitureUse:false
                })
            });
    }

    function deleteAll() {
        const url = "http://localhost:8080/api/trees";
        deleteData(url)
            .then(async data => {
                console.log(data);
                fetchData();
            });
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setTreeData(preVal => {
            return {
                ...preVal,
                [name]: (type == "checkbox") ? checked : value
            }
        });
    }

    return (
        <div >
            <div className="result-class">
                <div>
                    <input type="text" placeholder="Name" onChange={handleChange} name="name" value={treeData.name} />
                </div>
                <div>
                    <select id="country" onChange={handleChange} name="country" value={treeData.country} >
                        <option value="">Select country</option>
                        <option value="united states">United States</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                        <option value="france">France</option>
                        <option value="blue">Blue</option>
                        <option value="japan">Japan</option>
                        <option value="india">India</option>

                    </select>
                </div>
                <div>
                    <select id="height" onChange={handleChange} name="height" value={treeData.height} >
                        <option value=""> Select height</option>
                        <option value="short">short</option>
                        <option value="tall">talll</option>

                    </select>
                </div>
                <div>
                    <input type="text" placeholder="age" onChange={handleChange} name="age" value={treeData.age} />
                </div>
                <div>
                    <input type="checkbox" name="furnitureUse" checked={treeData.furnitureUse} onChange={handleChange} />
                </div>

                <button className="button-class" onClick={addFn}>Add</button>
                <button className="button-class" onClick={deleteAll}>Delete All</button>

            </div>
            <div className="right-class">
                <div >
                    {getResult("tall")}
                </div>
                <div className="treediv2-class">
                    {getResult("short")}
                </div>

            </div>

        </div>

    )
}