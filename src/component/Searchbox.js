import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


 export default function SearchBox({handleSearchSubmit,setParams}) {
 


  return (
    <Paper
      style={{alignSelf:"center",marginBottom:"5%"}}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search image"
        inputProps={{ 'aria-label': 'Search image' }}
        onChange={(e)=>setParams(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={(e) => handleSearchSubmit(e)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}