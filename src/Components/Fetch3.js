import React from "react";

export default function Fetch3() {

    const [arr, setArr] = React.useState([]);

    const [searchbox, setSearchBox] = React.useState("");

    const [alldata, setAlldata] = React.useState([]);

    const [perPage, setPerPage] = React.useState(10);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setAlldata(data);
            });
    }, [])

    const slicedArr = alldata.slice(0, perPage);
    const newArr = slicedArr.filter((i) => {
        const str = searchbox.toLowerCase();
        const titleStr = i.title.toLowerCase();
        if (titleStr.includes(str)) {
            return true;
        } else {
            return false;
        }
    });

    const result = newArr.map((item, index) => {

        return (
            <li key={index}>
                <img className="thumbnail-class" src={item.thumbnailUrl} />
                {item.title}
            </li>
        )
    });

    function handleChange(event) {
        setSearchBox(event.target.value);
    }

    function handleChange2(event) {
        setPerPage(event.target.value);
    }

    return (
        <div>

            <div>
                <input type="text" onChange={handleChange} value={searchbox} />

                <select id="fetch" onChange={handleChange2}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>

                </select>
            </div>

            <ol>
                {result}
            </ol>
        </div>
    )
}