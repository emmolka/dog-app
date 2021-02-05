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
  margin-top: 10px !important;
  background-color: #2f343a !important;
  text-transform: none !important;
  color: #dddddd !important;
`;

export const H1 = styled.h1`
  color: #dddddd;
  font-size: 20px;
  @media (min-width: 500px) {
    font-size: 30px;
  }
`;

export const StyledAutocomplete = styled(Autocomplete)`
  z-index: 1;
  overflow-x: visible !important;
  margin-top: 10px;
  width: 100%;
  max-width: 300px;
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
    color: #dddddd;
  }
  && .MuiAutocomplete-input {
    color: #dddddd;
  }
`;
