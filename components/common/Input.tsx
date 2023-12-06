import React, { ChangeEvent } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material';

const StyledInput = styled(TextField)`
  margin: 8px;
`;

interface CustomInputProps {
  label: string;
  variant: TextFieldProps['variant'];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, variant, onChange }) => {
  return (
    <StyledInput label={label} variant={variant} onChange={onChange} />
  );
};

export default CustomInput;
