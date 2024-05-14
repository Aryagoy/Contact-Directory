import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NewContactModal from './NewContactModal';
import Button from '@mui/material/Button';

const ContactList = ({ contacts, onContactClick, setContacts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedContact, setClickedContact] = useState(null);
  const [seeModal, updateModal] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    setClickedContact({});
  };

  const handleClick = (id, name, dob) => {
    updateModal(true);
    setClickedContact({ id, name, dob });
  };

  // Sort contacts by name in ascending order
  useEffect(() => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }, [contacts, setContacts]);

  return (
    <div style={{ maxWidth: 650, backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', margin: '0 0 20px' }}>Contacts</h2>
      <TableContainer component={Paper} sx={{ width: 400 }}>
        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Profile Photo</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Last Contact Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow
                key={contact.name}
                onClick={() => handleClick(contact.id, contact.name, contact.lastContactDate)}
                id={contact.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" align="center">
                  <img src={contact.image} alt={contact.name} className="w-12 h-12 rounded-full" style={{ height: "50px", width: "50px", borderRadius: 500 }} />
                </TableCell>
                <TableCell align="center">{contact.name}</TableCell>
                <TableCell align="center">{contact.lastContactDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <NewContactModal contacts={contacts} setContacts={setContacts} onSave={handleClose} onClose={handleClose} clickedContact={clickedContact} setClickedContact={setClickedContact} />
    </div>
  );
};

export default ContactList;
