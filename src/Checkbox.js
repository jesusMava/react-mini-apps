import React, { useEffect, useState } from "react";

export default function Checkbox() {
    const [val, set] = useState("");
    const [phrase, setPhrase] = useState("example phrase");
    const createPhrase = () => {
        setPhrase(val);
        set("");
    };
    useEffect(() => {
        console.log(`typing "${val}"`);
    },[val]);

    useEffect(() => {
        console.log(`saved phrase: "${phrase}"`);
        return () => {
            console.log(`stopped typing: "${val}"`);
        }
    }, [phrase]);

    return (
    <>
    <label>Favorite phrase:</label>
    <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
    />
    <button onClick={createPhrase}>send</button>
    </>
    );
//     const [checked, setChecked] = useState(false);

//     useEffect(() => {
//         console.log('inside useEffect');
//         alert(`checked: ${checked.toString()}`);
//     });
    
//     console.log('outside useEffect');
// return (
//     <>
//         <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
//         {checked ? "checked" : "not checked"}
//     </>
//     );
};