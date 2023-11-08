export default function Search() {

    const str = "Unterminated string constant Compiled with problems";
    const searchResult = str.includes("constant");
    const searchResult2 = str.includes("rose");
    const searchResult3 = str.includes("probz");



    const arr = ["abc", "hg", "dfg", "efgh", "pqh"];
    const searchArr = arr.find((i) => {
        const len = i.length;
        return (len == 3);
    });

    const arr2 = [
        {
            name: "Romi",
            age: 18,
            mark: 70
        },
        {
            name: "Ram",
            age: 20,
            mark: 100
        },
        {
            name: "Ram",
            age: 22,
            mark: 101
        },
        {
            name: "John",
            age: 15,
            mark: 90
        },
        {
            name: "Sita",
            age: 22,
            mark: 95
        },
        {
            name: "Romi",
            age: 18,
            mark: 75
        }
    ];
    const searchArr2 = arr2.find((i) => {
        return (i.name == "Ram") && (i.age == 22);
    });


    const searchArr3 = arr2.find((i) => {
        return (i.name == "Romi") && (i.mark == 75);
    });


    return (
        <div>
            {JSON.stringify(searchResult)}<br />
            {JSON.stringify(searchResult2)}<br />
            {JSON.stringify(searchArr)}<br />
            {JSON.stringify(searchArr2)}<br />
            {JSON.stringify(searchArr3)}<br />
            {JSON.stringify(searchResult3)}<br />
           
        </div>
    )
}