import { useEffect, useState } from "react";
import { getGift } from "../services/GetGift";

export const usefetchGif = (category) => {
    const [gifts, setGift] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const addGifts = async () =>{
        const listGifts =  await getGift(category);
        setGift(listGifts);
        setIsLoading(false);
    }

    console.log(gifts);

    useEffect(() => {
        addGifts();
    }, [])

    return {gifts, isLoading};
}