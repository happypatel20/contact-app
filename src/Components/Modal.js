import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";

const Modal = ({closeModal, handleCloseModal, formValue, handleUpdateContact}) => {
  return(
    <>
    <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={` ${
          closeModal ? "hidden" : ""
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full m-auto h-full flex items-center">
          <div className="relative bg-white rounded-lg shadow w-full">
            <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900">
                Update Contact
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={handleCloseModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <Formik
                enableReinitialize={true}
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
                    handleUpdateContact(values);
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
                    Update Contact
                  </button>
                </Form>
              </Formik>

              {/* <InputForm handleUpdateContact={handleUpdateContact} formValue={formValue} /> */}
            </div>
          </div>
        </div>
      </div>
      {closeModal ? (
        ""
      ) : (
        <div className="shadow fixed left-0 w-full h-full bg-black top-0 bg-opacity-40"></div>
      )}
      </>
  )
}

export default Modal
