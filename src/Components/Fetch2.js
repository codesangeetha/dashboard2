import React from "react"

export default function Ferch2() {

    const [arr, setArr] = React.useState([]);
    const [textboxVal, setTextboxVal] = React.useState("");
    const [perPage, setPerPage] = React.useState(10);
    const [completed, setCompleted] = React.useState(false);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                setArr(data);

            });
    }, [])

    const slicedArr = arr.slice(0, perPage);
    let newArr = slicedArr.filter((i) => {
        const str = textboxVal.toLowerCase();
        const titleStr = i.title.toLowerCase();
        if (titleStr.includes(str)) {
            return true;
        } else {
            return false;
        }
    });

    if(completed === true){
        newArr = newArr.filter((i) => {
            if (i.completed == true) {
                return true;
            } else {
                return false;
            }
        });
    }
   


    const result = newArr.map((item, index) => {

        let cls = '';
        if (item.completed == true) {
            cls = "green-class"
        }

        return (
            <li key={index} className={cls}>
                Title: {item.title}
            </li>)
    })

    function handleChange(event) {
        setTextboxVal(event.target.value);
    }

    function handleChange2(event) {
        setPerPage(event.target.value);
    }

    function handleChange3(event) {
        setCompleted(event.target.checked);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={textboxVal} />
            <select id="fetch" onChange={handleChange2}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>

            </select>
            <input type="checkbox" name="completed" value="true" onChange={handleChange3}/>completed

            <ul>
                {result}
            </ul>
        </div>
    )
}