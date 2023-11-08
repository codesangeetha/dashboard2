import React from "react";

export default function Cars() {

    const [arr, setArr] = React.useState([]);
    const [name, setName] = React.useState("");
    const [brand, setBrand] = React.useState("Honda");
    const [price, setPrice] = React.useState("");
    const [country, setCountry] = React.useState("India");

    React.useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch("http://localhost:8080/api/cars")
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setArr(data);
            });
    }
    function lauchFn(id) {
        const putBody = {
            "launched": true
        };
        let url = `http://localhost:8080/api/cars/${id}`;
        putData(url, putBody)
            .then(async data => {
                console.log(data);
                fetchData();
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




    function getResult() {
        const result = arr.map((item) => {

            let clsNme = "result-class";
            if (item.launched == true) {
                clsNme = "launch-class result-class";
            }

            return (
                <div className={clsNme}>
                    <div className="title-class">
                        {item.name}
                    </div>
                    <div>
                        {item.brand}
                    </div>
                    <div>
                        {item.cost}
                    </div>
                    <div>
                        {item.country}
                    </div>
                    {item.launched == false && <button onClick={() => { lauchFn(item.id); }} className="button-class">Launch</button>}

                    <button className="button-class" onClick={() => { deleteFn(item.id) }}>Delete</button>
                </div>
            )
        });
        return result
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
            "name": name,
            "brand": brand,
            "launched": false,
            "cost": price,
            "country":country
        };
        postData('http://localhost:8080/api/cars', postBody)
            .then(async data => {
                console.log(data);
                fetchData();

            });
        setName("");
        setBrand("");
        setPrice("");
        setCountry("");
    }

    function deleteFn(id) {
        const url = `http://localhost:8080/api/cars/${id}`;
        deleteData(url)
            .then(async data => {
                console.log(data);
                fetchData();
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


function deleteAll(){
    const url = "http://localhost:8080/api/cars";
    deleteData(url)
        .then(async data => {
            console.log(data);
            fetchData();
        });
}


    function handleAdd1(event) {
        setName(event.target.value);
    }   

    function handleAdd2(event) {
        setBrand(event.target.value);
    }
    function handleAdd3(event) {
        setPrice(event.target.value);
    }
    function handleAdd4(event) {
        setCountry(event.target.value);
    }

    return (

        <div>
            <div className="result-class">
                <input type="text" placeholder="Name" onChange={handleAdd1} value={name} />
                <div>
                    <select id="brand" onChange={handleAdd2} value={brand} >
                        <option value="Honda">Honda</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Maruti">Maruti</option>
                        <option value="Toyota">Toyota</option>

                    </select>
                </div>
                <div>
                    <input type="text" placeholder="Price" onChange={handleAdd3} value={price} />
                </div>
                <div>
                    <select id="country" onChange={handleAdd4} value={country} >
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Korea">Korea</option>
                        <option value="Japan">Japan</option>
                        <option value="America">America</option>

                    </select>
                </div>
                <div className="button-class">
                    <button onClick={addFn}>Add</button>
                    <button className="button-class"  onClick={deleteAll}>Delete All</button>
                    

                </div>
            </div>



            <div>
                {getResult()}
            </div>
        </div>
    )
}