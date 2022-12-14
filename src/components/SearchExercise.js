import React, { useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { fetchData ,exerciseOptions } from '../utils/fetchData';

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercise = () => {
  const {search, setSearch} = useState(''); 
  const {exercises, setExercises} = useState([]);
  const {bodyParts, setBodyParts} = useState([]); 

  useEffect(() => {
const fetchExercisesData = async () =>  {
  const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
setBodyParts(['all' , ...bodyPartsData]);
}
fetchExercisesData(); 

  },[]); 

  const handleSearch = async () => { /* async for pull some of data */
if(search){
  const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

  const searchedExercises = exercisesData.filter(
    (exercise) => exercise.name.toLowerCase().includes(search)
   // , exercise.target.toLowerCase().includes(search),
   // exercise.equipment.toLowerCase().includes(search),
   // exercise.bodyPart.toLowerCase().includes(search),
  );

  setSearch('');
  setExercises(searchedExercises);
}
  }
  
  return (
<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
<Typography fontWeight={700} sx={{
  fontSize: { lg: '44px', xs: '30px'}}} mb="50px" textAlign={'center'}>
Awesome Exercises You<br/>
  Should Know 
</Typography>

<Box position='relative' mb='72px'>
<TextField 
sx={{
  input: { 
    fontWeight: '700', 
    border: 'none', 
    borderRadius:'4px'
  },
  width: { lg: '800px' , xs: '350px'},
  backgroundColor: '#fff' ,
  borderRadius: '40px'
}}
height="76px"
value=""
onChange={(e) => setSearch(e.target.value.toLowerCase())} /* boi gar ba smole yan kapital search ii krd haman sht bet */
placeholder="Search Exercises"
type="text"
/>

<Button className='search-btn'
sx={{
  bgcolor: '#FF2625',
  color: '#fff',
  textTransform: 'none',
  width: { lg: '175px', xs: '80px'},
  fontSize: { lg: '20px' , xs: '14px'},
  height: '56px',
  position: "absolute",
  right: '0'   /* chonka absolute w box man bakarhenawa boi rek beta center */
}}
onClick={handleSearch}
>
Search
</Button>
</Box>

<Box sx={{
   position: 'relative', width: '%100', p: '20px' }}>
<HorizontalScrollbar data={bodyParts} />
</Box>

</Stack>
  )
}

export default SearchExercise