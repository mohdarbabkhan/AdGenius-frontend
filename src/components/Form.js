import React,{useState} from 'react'
import Container from '@mui/material/Container';
import { Typography,Box,TextField,Button } from '@mui/material';
import Ad from './Ad';


const Form = () => {
  const btnStyles = {
    backgroundColor:"rgb(186 224 222)",
    color:"black",
    align:"right"
  }
  const highlited ={
    color:"#FDFDFD"
  }
  
  const [prompt, setPrompt] = useState('Enter your Product description here...');
  const [adData, setadData] = useState('');
  const [loading,setloading] = useState(null);
  function handleChange(event) {
    setPrompt(event.target.value);
  }
  async function handleSubmit(e){
    e.preventDefault();
    setloading(true)
    const res = await fetch("https://adbackend.onrender.com/genAd",{
      "method":"POST",
      "headers":{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
          prompt,
      })
    })
    console.log(prompt);
    const data = await res.json();
    const adData = data.data;
      setadData(adData);
      setloading(false);
      console.log(adData);
    if(!res.ok){
      throw new Error("Ad could not be generated!!")
    }
    
  }
  
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant='h3'  gutterBottom sx={{pt:7,fontFamily:"Anton,sans-serif",color:"#070707"}}>
        Turn Your <span style={highlited}>Product</span> description into <span style={highlited}>Ad </span>copy</Typography>
      </Box>
      <Box sx={{pt:3}}>
      <TextField
          multiline
          type="text" 
          value={prompt}
          rows={6}
          fullWidth
          onChange={handleChange}
        />
      </Box>
      
      <Box gutterBottom sx={{paddingY:1}}>
      <Button variant="contained" size="small" type="submit" style={btnStyles} onClick={handleSubmit}>
          <Typography sx={{fontFamily:"san-serif",fontWeight:"bold"}}>Submit</Typography>
        </Button>
      </Box>
    <Box sx={{marginBottom:6}}>
    <Ad adData={adData} loading={loading}/>
    </Box>
    </Container>
  )
}

export default Form