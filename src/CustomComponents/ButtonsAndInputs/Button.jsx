import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields({label,defaultValue,helperText,type,onEventClick,Value}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { ml: 6,mt: 5, width: '40ch' },justifyContent: 'center'
      }}
      noValidate
      autoComplete="off"
    >
        <div>
           <TextField
          label={label}
          value={Value}
          defaultValue={defaultValue}
          helperText={helperText}
          variant="filled"
          type={type ? `${type}` : "text"}
          onChange={(E)=>{
            onEventClick(E.target.value);
          }}
        />
      </div>
    </Box>
  );
}
