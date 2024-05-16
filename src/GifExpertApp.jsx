import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gifgrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

    const addCategory = (inputText) => {
        if(categories.includes(inputText)) return;
        setCategories([...categories, inputText])
    }

    return (
        <>
            <h1>Buscar Gift</h1>
            <AddCategory onAddCategory={addCategory}/>
            { categories.map((category, index) => <Gifgrid key={index} category={category}/> ) }
        </>
    );
}