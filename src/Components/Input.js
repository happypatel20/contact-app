import { ErrorMessage, Field } from "formik"

const Input = ({htmlFor, name, title, type, spacing}) => {
  return(
    <>
      <label className={`${spacing ? 'mt-5' : ''} block mb-2 font-semibold`} htmlFor={htmlFor}>{title} <span className="text-red-600">*</span> </label>
      <Field className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`} name={name} type={type} />
      <ErrorMessage component="span" className="text-red-600 text-sm" name={name} />
    </>
  )
}
export default Input
