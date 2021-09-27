import React, { useState, useEffect } from "react";
import { FaHeart } from 'react-icons/fa';

const Favourite = ({job_index}) => {
   
    const [isFavourite, setIsFavourite] = useState(JSON.parse(localStorage.getItem(job_index+'_fav')))    
    
    useEffect(() => {
        localStorage.setItem(job_index+'_fav',isFavourite)
    }, [job_index,isFavourite])

    return(
        <div>
            <button className="btn_favicon" name="btn_fav" onClick={() => setIsFavourite(!isFavourite)}>
            {
                isFavourite ? <FaHeart size={20} color="red" /> : <FaHeart size={20} color="gray" />
            }
            </button>
        </div>
    );
}

export default Favourite;