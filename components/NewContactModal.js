// NewContactModal.js
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const NewContactModal = ({ onSave, onClose, contacts, setContacts, clickedContact, setClickedContact }) => {
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
    const [name, setName] = useState('');
    const [lastContactDate, setLastContactDate] = useState(new Date());
    const [image, setImage] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isValidDate = (date) => {
        return date instanceof Date && !isNaN(date);
    };
    const addContact = (e) => {
        const date = new Date(lastContactDate.toString());
        const lastContactDateString = date.toISOString().split('T')[0];
        const isUpdating = clickedContact != null;
        const contact = isUpdating ?
            { ...clickedContact, name, lastContactDate: lastContactDateString, image } :
            { name, lastContactDate: lastContactDateString, image };

        const updatedContacts = isUpdating ?
            contacts.map(c => c.id === clickedContact.id ? contact : c) :
            [...contacts, contact];
        const sortedContacts = [...updatedContacts].sort((a, b) => a.name.localeCompare(b.name));
        setContacts(sortedContacts);
        onSave(contact);

        setOpen(false);
        setClickedContact(null);

    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (clickedContact) {
            const contactDate = new Date(clickedContact.lastContactDate);
            if (isValidDate(contactDate)) {
                setLastContactDate(contactDate);
            } else {
                setLastContactDate(new Date()); // Set to current date or a default fallback date
            }
            setName(clickedContact.name);
            setImage(clickedContact.image);
            setOpen(true);
        }
    }, [clickedContact]);

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-10" style={{ display: "flex", width: "400px", justifyContent: "center" }}>
            <Button onClick={handleOpen}>Add Contact</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="create-contact-modal"
                aria-describedby="create-contact-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '1px solid #ccc',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom={2}>
                        Create a New Contact
                    </Typography>
                    <TextField
                        fullWidth
                        label="Contact Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="dense"
                    />
                    <label htmlFor="upload-button-file">
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="upload-button-file"
                            type="file"
                            onChange={handleFileChange}
                        />
                        <Button variant="outlined" component="span" startIcon={<CloudUploadIcon />} fullWidth margin="dense">
                            Add File
                        </Button>
                    </label>
                    <DatePicker showIcon
                        selected={lastContactDate}
                        onChange={date => setLastContactDate(date)}
                        customInput={<TextField fullWidth />}
                        dateFormat="MMMM d, yyyy"
                        margin="dense"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={addContact}
                        sx={{ mt: 2 }}
                    >
                        Save Contact
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default NewContactModal;