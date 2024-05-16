
import { GifItem } from "./GifItem";
import { usefetchGif } from "../hooks/useFetchGifs";

export const Gifgrid =  ({ category }) => {
    
    const {gifts, isLoading} = usefetchGif(category);

    return (<>
        <div>
            <h3>{ category }</h3>
            {
                isLoading && (<h2> Carando...</h2>)
            }
            <div className='card-grid'>
                {
                    gifts.map((gift) => (<GifItem key={gift.id} {...gift} />))
                }
            </div> 
            
        </div>
    </>);
}