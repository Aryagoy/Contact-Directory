import ContactList from '@/components/ContactList';
import NewContactModal from '@/components/NewContactModal';
import React, { useEffect, useState } from 'react';

const sampleContacts = [
    { id: 1, name: 'John Doe', lastContactDate: '2022-05-01', image: "https://picsum.photos/200/300" },
    { id: 2, name: 'Jane Smith', lastContactDate: '2022-04-15', image: "https://picsum.photos/200/300" },
    { id: 3, name: 'Alice Johnson', lastContactDate: '2022-03-20', image: "https://picsum.photos/200/300" },
];

export default function Home() {
    const [contacts, setContacts] = useState(sampleContacts);
    const [selectedContact, setSelectedContact] = useState(null);
    const [showNewContactModal, setShowNewContactModal] = useState(false);

    const handleContactClick = (contact: any) => {
        setSelectedContact(contact);
    };
    useEffect(() => {
        console.log(showNewContactModal)
    }, [showNewContactModal])

    const handleNewContactSave = (newContact: any) => {
        const updatedContacts = [...contacts, { ...newContact, id: contacts.length + 1 }];
        setContacts(updatedContacts);
    };

    return (
        <div className="container mx-auto p-8">
            <ContactList contacts={contacts} setContacts={setContacts} onContactClick={handleContactClick} />
        </div>
    );
};

