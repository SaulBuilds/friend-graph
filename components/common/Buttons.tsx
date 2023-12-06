import React, { ReactNode, MouseEvent } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
  variant: 'text' | 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  size: 'small' | 'medium' | 'large';
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const StyledButton = styled(Button)<CustomButtonProps>`
  margin: 8px;
`;

const CustomButton: React.FC<CustomButtonProps> = ({ variant, color, size, onClick, children }) => {
  return (
    <StyledButton variant={variant} color={color} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
