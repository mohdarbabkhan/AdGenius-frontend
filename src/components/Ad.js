
import React from "react"
import { TextField,CircularProgress,InputAdornment} from '@mui/material'


const Ad = ({adData,loading}) => {
const circularStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -10,
    marginLeft: -10,
    color: "black"
}
  return (
    <>
     <TextField
        sx={{mt:2}}
          multiline
          type="text"
          value={adData} 
          InputProps={{
        endAdornment: (
          <InputAdornment position="center">
            { loading && <CircularProgress size={30} style={circularStyle}/>}
          </InputAdornment>
        ),
      }}
      
          rows={6}
          fullWidth
        />
        <div>
        
        </div>
    </>
  )
}

export default Ad