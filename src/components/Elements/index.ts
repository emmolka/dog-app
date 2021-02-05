import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export const StyledImage = styled.img`
  display: flex;
  flex: 1;
  width: 100%;
  object-fit: cover;
  object-position: center;
  position: relative;
`;

export const StyledButton = styled(Button)`
  margin-top: 45px;
  background-color: #f5f5f5f5 !important;
  text-transform: none !important;
`;

export const H1 = styled.h1`
  font-size: 35px;
`;

export const StyledAutocomplete = styled(Autocomplete)`
  z-index: 1;
  overflow-x: visible !important;
  margin-top: 20px;
  width: 300px;
  overflow: visible;
  // some quick styles to overwrite material ui styles
  && .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  && .MuiFormControl-root,
  .MuiFormControl-root label {
    overflow: visible;
    overflow-x: visible;
  }
  && .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline,
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid white !important;
    border-radius: inherit;
  }
`;

export const StyledTextField = styled(TextField)`
  label {
    color: #676767;
  }
  && .MuiAutocomplete-input {
    color: #676767;
  }
`;
