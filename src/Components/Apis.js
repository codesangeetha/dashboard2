import React from "react";

export default function Apis() {

    const [arr, setArr] = React.useState([]);
    const [tutorial, setTutorial] = React.useState("");

    React.useEffect(() => {
        fetchData();
    }, []);

    async function postData(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function deleteData(url) {
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function fetchData() {
        await fetch("http://localhost:8080/api/tutorials")
            .then(res => res.json())
            .then(data => {
                setArr(data);
            });
    }



    function handleAdd(event) {
        setTutorial(event.target.value);
    }

    function addTutorial() {
        const postBody = {
            "title": tutorial,
            "description": `${tutorial} details`,
            "published": false
        };
        postData('http://localhost:8080/api/tutorials', postBody)
            .then(async data => {
                console.log(data);
                await fetchData();
            });
    }

    function deleteItem(id) {
        const url = `http://localhost:8080/api/tutorials/${id}`;
        deleteData(url)
            .then(async data => {
                console.log(data);
                await fetchData();
            });
    }

    const result = arr.map((item, index) => {
        return (
            <li key={index}>
                <div>Title: {item.title}
                    <button onClick={() => { deleteItem(item.id); }}>delete</button>
                </div>
                <div>Description: {item.description}</div>
                <br />
            </li>)
    });


    return (
        <div>
            <input type="text" onChange={handleAdd} value={tutorial}></input>
            <button onClick={addTutorial}>Add tutorial</button>
            <ul>{result}</ul>
        </div>
    )
}