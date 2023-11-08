import React from "react"

export default function Fetch() {

    const [arr, setArr] = React.useState([]);


    React.useEffect(async () => {
        await fetchData();
        console.log('hi');
    }, []);

    async function fetchData() {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                console.log('fetch');
                setArr(data);

            });
    }

    const result = arr.map((item, index) => {
        return (
            <li key={index}>
                Name:  {item.name}
                <div>  Email :{item.email}</div>
                <div>
                    Phone :{item.phone}
                </div>
                <>
                    Street : {item.address.street}
                </>
            </li>)
    })


    return (
        <div>
            {/*  {JSON.stringify(arr)} */}

            <ol>
                {result}
            </ol>
        </div>
    )

}



/* 

React.useEffect(() => {
    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            let num = arr.length + 2;
            const dataArr = data.products.slice(0, num)
            setArr(dataArr);

        });
}, [name]) */