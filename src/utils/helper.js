export const addNewContact = (contactList,values) => {
  const newContact  = [
    ...contactList,
    {
      name: values.name,
      email: values.email,
      contact: values.contact,
    },
  ]
  return newContact
};

export const initContactList = () => {
  const savedContactList = localStorage.getItem("contactList");
  if (savedContactList) {
    return JSON.parse(savedContactList);
  } else {
    return [];
  }
}

export const initFormValue = {
    name: "",
    email: "",
    contact: "",
}
