import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Button } from 'react-bootstrap';


const FavouritesCount = () => {
    const navigate = useNavigate();
    const FavouritesLength = useSelector(state => state.fav.favourites.content.length)
    return(
        <div className='w-100 d-flex justify-content-between p-5'>
            
            <Button variant='success' onClick={() => navigate("/")}> HOME </Button>            
            <Button variant='dark'  onClick={() => navigate("/favourites")}>FAVOURITES =<span> {FavouritesLength}</span></Button>
        
        </div>
    )

}

export default FavouritesCount;