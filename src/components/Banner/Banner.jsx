import React ,{ useState }from 'react';
import { Button } from '@material-ui/core';
import Search from '../Search/Search';
import {useHistory} from "react-router-dom";
import "./Banner.css"


const Banner = () => {
    const [showSearch, setShowSearch] = useState(false)

    const history = useHistory()
    return (
        <div className='banner'>
            <div className='banner__search'>
                <Button className='banner__searchButton' variant='outlined' onClick={() => setShowSearch((prev) => !prev)}>
                {showSearch ? "Hide" : "Show Date"}
                </Button>
                {showSearch && <Search/> }
                </div>
                <div className='banner__info'>
                <h1>Get out stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover hidden gems near you</h5>
                <Button variant="outlined" onClick={() => history.push("/search")}>Explore Nearby</Button>
                </div>
            </div>
            
        
    )
}

export default Banner
