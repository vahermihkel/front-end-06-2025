import { Button, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext.tsx"
import PasswordInput from "./PasswordInput.tsx";
import { useNavigate } from "react-router-dom";

interface AuthFormInterface {
  buttonContent: string
}

function AuthForm(params: AuthFormInterface) {
  const {setLoggedIn} = useContext(AuthContext);
  const [person, setPerson] = useState({
    email: "",
    password: "",
    name: "",
    phone: ""
  });
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    if (params.buttonContent === "Registreeru" &&
         person.password !== repeatPassword) {
      alert("Paroolid ei ühti!");
      return;
    }

    setLoggedIn(true);
    sessionStorage.setItem("token", "123");
    navigate("/admin");
  }

  return (
    <div>
      <div>{JSON.stringify(person)}</div>
      <div>{repeatPassword}</div>
      <br />
      <TextField onChange={(e) => setPerson({...person, email: e.target.value})} label="Email" variant="outlined" /> <br /> <br />
      <PasswordInput id="password" setPassword={(e) => setPerson({...person, password: e})} />
      <br /> <br />
      {params.buttonContent === "Registreeru" &&
      <>
        <PasswordInput id="repeat-password" setPassword={setRepeatPassword} />
        <br /> <br />
        <TextField onChange={(e) => setPerson({...person, name: e.target.value})} label="Name" variant="outlined" /> <br /> <br />
        <TextField onChange={(e) => setPerson({...person, phone: e.target.value})} label="Telephone" variant="outlined" type="number" /> <br /> <br />
      </>}
      <Button variant="outlined" onClick={submit}>{params.buttonContent}</Button>

    </div>
  )
}

export default AuthForm



{/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="repeat-password">Repeat password</InputLabel>
        <OutlinedInput id="repeat-password" onChange={(e) => setRepeatPassword(e.target.value)} label="Repeat password"  type={showPassword ? 'text' : 'password'} 
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
        </FormControl> */}