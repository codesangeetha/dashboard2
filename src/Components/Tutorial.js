import React from "react";
export default function Ferch2() {

    const [arr, setArr] = React.useState([]);
    const [published, setpublished] = React.useState(false);

    const [boxval, setBoxVal] = React.useState("");

    React.useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 1000);
    }, []);

    /*  function buttonFn() {
         fetchData();
     } */

   


    function fetchData() {
        fetch("http://localhost:8080/api/tutorials")
            .then(res => res.json())
            .then(data => {
                setArr(data);

            });
    }


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



    function deleteItem(id) {
        const url = `http://localhost:8080/api/tutorials/${id}`;
        deleteData(url)
            .then(async data => {
                console.log(data);
                await fetchData();
            });
    }

    function getResult() {
        const result = arr.map((item) => {
            let tick = "";
            if (item.published == true) {
                tick = <img className="img-class" src="https://em-content.zobj.net/source/skype/289/check-mark_2714-fe0f.png" />
            } else {
                tick = <button onClick={() => { publishedFn(item.id); }}>Mark as published</button>
            }



            return (
                <li>
                    <div>
                        Title : {item.title}{tick} <button onClick={() => { deleteItem(item.id); }}>Delete</button>

                    </div>
                    <div>
                        Description: {item.description}

                    </div>
                </li>
            )
        });
        return result;
    }

    function publishedFn(id) {
        const postBody = {
            "published": true
        };
        let url = `http://localhost:8080/api/tutorials/${id}`;
        putData(url, postBody)
            .then(async data => {
                console.log(data);
            });
    }



    async function putData(url, data) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
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



   

    function addFn() {
        const postBody = {
            "title": boxval,
            "description": `${boxval} details`,
            "published": false
        };
        postData('http://localhost:8080/api/tutorials', postBody)
            .then(async data => {
                console.log(data);
            });
        setBoxVal("");
    }


    function handleAdd(event) {
        setBoxVal(event.target.value);
    }

    function buttonFn() {
        const url = "http://localhost:8080/api/tutorials/";
        deleteData(url)
            .then(async data => {
                console.log(data);
                await fetchData();
            });
    }

    return (
        <div>
            <input type="text" onChange={handleAdd} value={boxval}></input>

            <button onClick={addFn}>Add</button>
            {/*   <button onClick={buttonFn}>Reload</button> */}

            <div>
                <button onClick={buttonFn}>Delete All</button>
            </div>

            <ol>
                {getResult()}
            </ol>
        </div>
    )
}

/* <input type="checkbox" checked={item.published } />

*/ 