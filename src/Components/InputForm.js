import { Form, Formik } from "formik";
import Input from "./Input";
import * as Yup from "yup";


const InputForm = ({handleAddContact,formValue}) => {
  return(
    <Formik
      initialValues={formValue}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        contact: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          handleAddContact(values);
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
  >
    <Form>
      <Input
        htmlFor={"name"}
        title={"Name"}
        name={"name"}
        type={"text"}
        spacing={false}
      />
      <Input
        htmlFor={"contact"}
        title={"Contact"}
        name={"contact"}
        type={"number"}
        spacing={true}
      />
      <Input
        htmlFor={"email"}
        title={"Email"}
        name={"email"}
        type={"email"}
        spacing={true}
      />
      <button
        className="flex ml-auto mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gradiant sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        type="submit"
      >
        Save Contact
      </button>
    </Form>
  </Formik>
  )
}

export default InputForm
