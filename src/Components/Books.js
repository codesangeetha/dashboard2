import React from "react"
export default function Books() {
    const [arr, setArr] = React.useState([]);

    const [titleVal, setTitleVal] = React.useState("");
    const [authorVal, setAuthorVal] = React.useState("");
    const [priceVal, setPriceVal] = React.useState("");


    React.useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 1000);
    }, [])

    function fetchData() {
        fetch("http://localhost:8080/api/books")
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setArr(data);
            });
    }


    function publishFn(id) {
        const postBody = {
            "published": true
        };
        let url = `http://localhost:8080/api/books/${id}`;
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

    function deletefn(id) {
        const url = `http://localhost:8080/api/books/${id}`;
        deleteData(url)
            .then(async data => {
                console.log(data);

            });
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


    function getResult() {

        const result = arr.map((item) => {
            let clsNme = "div-class";
            if (item.published == true) {
                clsNme = "publish-class div-class";
            }

            /*  let publishBn = "";
             if(item.published == false){
                 publishBn = <button>Publish</button>;
             } 
             
             or//
 
              {item.published == false && <button>Publish</button>
              (it is written below)
             */

            return (
                <div className={clsNme}>
                    <div className="title-class">
                        {item.title}
                    </div>
                    <div>
                        {item.author}
                    </div>
                    <div>
                        ${item.price}
                    </div>
                    {item.published == false && <button onClick={() => { publishFn(item.id); }}>Publish</button>}

                    <button className="button-class" onClick={() => { deletefn(item.id); }}>Delete</button>

                </div>


            )
        })
        return result;

    }
    function handleAdd1(event) {
        setTitleVal(event.target.value);
    }
    function handleAdd2(event) {
        setAuthorVal(event.target.value);
    }
    function handleAdd3(event) {
        setPriceVal(event.target.value);
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




    function addFn() {
        const postBody = {
            "title": titleVal,
            "author": authorVal,
            "published": false,
            "price": priceVal
        };
        postData('http://localhost:8080/api/books', postBody)
            .then(async data => {
                console.log(data);

            });
        setTitleVal("");
        setAuthorVal("");
        setPriceVal("");
    }

    function buttonFn() {
        const url = "http://localhost:8080/api/books";
        deleteData(url)
            .then(async data => {
                console.log(data);
            });
    }

    return (
        <div>
            <div className="add-class">
                <input type="text" placeholder="Title" onChange={handleAdd1} value={titleVal} />
                <div>
                    <input type="text" placeholder="Author" onChange={handleAdd2} value={authorVal} />
                </div>
                <div>
                    <input type="text" placeholder="Price" onChange={handleAdd3} value={priceVal} />
                </div>
                <div>
                    <button onClick={addFn}>Add</button>
                </div>
                <div>
                    <button onClick={buttonFn}>Delete All</button>
                </div>
            </div>


            <div>
                {getResult()}
            </div>


        </div>
    )
}