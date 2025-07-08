import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from "react";

interface PasswordInputInterface {
  id: string,
  setPassword: (newValue: string) => void
}

function PasswordInput(params: PasswordInputInterface) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor={params.id}>Password</InputLabel>
        <OutlinedInput id={params.id} onChange={(e) => params.setPassword(e.target.value)} label="Password" type={showPassword ? 'text' : 'password'}
          endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
        /> 
      </FormControl>
  )
}

export default PasswordInput