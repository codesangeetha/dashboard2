import React from "react"


export default function Display() {
    let arr = [
        {
            "name": "Oak",
            "country": "canada",
            "height": "tall",
            "age": 30,
            "furnitureUse": true,
            "createdAt": "2023-11-04T08:49:29.779Z",
            "updatedAt": "2023-11-04T08:49:29.779Z",
            "id": "654605992091d8fd9fe072f9"
        },
        {
            "name": "Maple",
            "country": "france",
            "height": "tall",
            "age": 40,
            "furnitureUse": true,
            "createdAt": "2023-11-04T08:50:06.684Z",
            "updatedAt": "2023-11-04T08:50:06.684Z",
            "id": "654605be2091d8fd9fe072fc"
        },
        {
            "name": "Pine",
            "country": "japan",
            "height": "short",
            "age": 20,
            "furnitureUse": true,
            "createdAt": "2023-11-04T08:50:46.632Z",
            "updatedAt": "2023-11-04T08:50:46.632Z",
            "id": "654605e62091d8fd9fe07300"
        },
        {
            "name": "Birch",
            "country": "india",
            "height": "short",
            "age": 25,
            "furnitureUse": true,
            "createdAt": "2023-11-04T08:51:10.883Z",
            "updatedAt": "2023-11-04T08:51:10.883Z",
            "id": "654605fe2091d8fd9fe07303"
        },
        {
            "name": "Willow",
            "country": "australia",
            "height": "tall",
            "age": 50,
            "furnitureUse": true,
            "createdAt": "2023-11-04T08:51:30.893Z",
            "updatedAt": "2023-11-04T08:51:30.893Z",
            "id": "654606122091d8fd9fe07306"
        },
        {
            "name": "Cherry",
            "country": "india",
            "height": "short",
            "age": 30,
            "furnitureUse": false,
            "createdAt": "2023-11-04T08:51:51.386Z",
            "updatedAt": "2023-11-04T08:51:51.386Z",
            "id": "654606272091d8fd9fe07309"
        },
        {
            "name": "Sapporta",
            "country": "japan",
            "height": "short",
            "age": 10,
            "furnitureUse": true,
            "createdAt": "2023-11-06T11:38:36.488Z",
            "updatedAt": "2023-11-06T11:38:36.488Z",
            "id": "6548d03ce6d1802cc7885ad0"
        },
        {
            "name": "Teak",
            "country": "india",
            "height": "tall",
            "age": 20,
            "furnitureUse": true,
            "createdAt": "2023-11-06T11:40:06.465Z",
            "updatedAt": "2023-11-06T11:40:06.465Z",
            "id": "6548d096e6d1802cc7885ad4"
        },
        {
            "name": "MangoTree",
            "country": "india",
            "height": "tall",
            "age": 25,
            "furnitureUse": false,
            "createdAt": "2023-11-06T12:32:11.438Z",
            "updatedAt": "2023-11-06T12:32:11.438Z",
            "id": "6548dccbe6d1802cc7885ae8"
        },
        {
            "name": "gdgdg",
            "country": "canada",
            "height": "short",
            "age": 25,
            "furnitureUse": true,
            "createdAt": "2023-11-06T12:36:02.914Z",
            "updatedAt": "2023-11-06T12:36:02.914Z",
            "id": "6548ddb2e6d1802cc7885af5"
        }
    ]

    const result = arr.map((item) => {
        return (
            <div style={{ color: "brown", marginBottom: "20px" }}>
                <div style={{ color: "black" }}>
                    {item.name}
                </div>
                <div>
                    {item.country}
                </div>
            </div>
        )

    })

    return (
        <div>
            <div>
                {result}
            </div>
        </div>
    )
}