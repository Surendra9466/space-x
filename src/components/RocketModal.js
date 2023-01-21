import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function RocketModal({ rocketId }) {
    const [open, setOpen] = useState(false);
    const [rockteData, setRockteData] = useState({});
  const handleOpen = () => {
        setOpen(true);
        fetch(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
            .then(res => res.json())
            .then(data => setRockteData(data))
    };
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} id="modal-btn">Quick Details</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" className="font-bold">
                            {rockteData.rocket_name}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        <strong>Details:</strong> {rockteData.description}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                            Status: <strong>{rockteData.active ? 'Active' : 'Not-Active'}</strong>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}