import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputText= inputValue.trim();
        if(inputText.length < 1) return;
        onAddCategory(inputText);
    }

    return (
        <>
            <form onSubmit={ onSubmit}>
                <input 
                    type="text" 
                    placeholder="Buscar gifs"
                    value = {inputValue}
                    onChange = {onChangeInput}
                />
            </form>
            
        </>
    )
}