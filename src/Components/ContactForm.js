import { useEffect, useState } from "react";
import Modal from "./Modal";
import { initContactList, initFormValue } from "../utils/helper";
import InputForm from "./InputForm";

const ContactForm = () => {
  const [editedIndex, setEditedIndex] = useState(-1);
  const [closeModal, setCloseModal] = useState(true);

  const [formValue, setFormValue] = useState(initFormValue);

  const [contactList, setContactList] = useState(initContactList());

  const handleUpdateContact = (values) => {
    if (editedIndex >= 0) {
      const updatedContactList = contactList.map((contactItem, index) => {
        if (editedIndex === index) {
          return {
            name: (contactItem.name = values.name),
            email: (contactItem.email = values.email),
            contact: (contactItem.contact = values.contact),
          };
        }
        return contactItem;
      });
      setContactList(updatedContactList);
      setEditedIndex(-1);
      setCloseModal(true);
    }
  };
  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  const handleEditContact = (index) => {
    setCloseModal(false);
    console.log("contactList",contactList);
    setFormValue(contactList[index]);
    setEditedIndex(index);
  };

  const handleDeleteContact = (index) => {
    setContactList(contactList.filter((_, i) => i !== index));
  };
  const handleCloseModal = () => {
    setCloseModal(true);
  };

  return (
    <>
      <header className="bg-gradiant p-5 text-white text-xl">
        <h1 className="container mx-auto font-bold text-2xl">Contact App</h1>
      </header>
      <section className="container mx-auto bg-white grid grid-cols-12 py-16 items-start">
        <div className="shadow-2xl p-12 text-black rounded-xl col-span-12 lg:col-span-4">
          <InputForm contactList={contactList} setContactList={setContactList} formValue={formValue} />
        </div>
        <div className="text-white px-5 col-span-12 lg:col-span-8 mt-10 lg:mt-0">
          <h1 className="text-black mb-5 text-xl font-bold">Contact List</h1>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs uppercase bg-gray-50 dark:bg-white text-white">
                <tr className="bg-gradiant">
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {contactList.map((contact, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b  dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap"
                    >
                      {contact.name}
                    </th>
                    <td className="px-6 py-4 text-black">{contact.contact}</td>
                    <td className="px-6 py-4 text-black">{contact.email}</td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-blue-400 text-white p-3 rounded-md"
                        onClick={() => handleEditContact(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"></path>
                        </svg>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-red-400 text-white p-3 rounded-md"
                        onClick={() => handleDeleteContact(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Modal closeModal={closeModal} handleCloseModal={handleCloseModal} formValue={formValue} handleUpdateContact={handleUpdateContact} />
    </>
  );
};

export default ContactForm;
