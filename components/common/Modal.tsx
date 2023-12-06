import React, { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled(Box)`
  background-color: white;
  padding: 16px;
  border: 2px solid #000;
`;

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, handleClose, title, children }) => {
  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalBox>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {children}
        </Typography>
        <Button onClick={handleClose}>Close</Button>
      </ModalBox>
    </StyledModal>
  );
};

export default CustomModal;
