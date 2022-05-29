import React,{useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {getWeather} from "../../actions";

const HomepageForm = ({name,setName}) => {
    const dispatch = useDispatch()
    const getWeatherForm = (city)=>{
        dispatch(getWeather(city))
    }
    return (
            <div style={{marginTop:"150px",marginRight:"50px"}} className={'homepage-form'}>
                <TextField valuse = {name}
                           onChange={(e)=>setName(e.target.value)}
                           id="outlined-basic" label="City" variant="outlined" />
                <Button style={{background:'purple'}} onClick={()=>getWeatherForm(name)} variant="contained">Search</Button>
            </div>
    );
};

export default HomepageForm;