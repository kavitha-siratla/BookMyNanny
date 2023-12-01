import * as Yup from "yup";

export const parentSchema = Yup.object().shape({
  displayName: Yup.string()
    .required("Display name is required")
    .matches("^[a-zA-Z ]*$", "Invalid Name")
    .min(3, "Name must be atleast 3 cahracters")
    .max(40, "Name cannot be greater than 40 cahracters")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  passwordOne: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  passwordTwo: Yup.string().required("Confirm password is required"),
  firstName: Yup.string()
    .required("First name is required")
    .matches("^[a-zA-Z ]*$", "Invalid First name")
    .min(3, "First name must be atleast 3 cahracters")
    .max(40, "First name cannot be greater than 40 cahracters")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  lastName: Yup.string()
    .required("Last name is required")
    .matches("^[a-zA-Z ]*$", "Invalid Last name")
    .min(3, "Last name must be atleast 3 characters")
    .max(40, "Last name cannot be greater than 40 cahracters")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  street: Yup.string()
    .required("Street is required")
    .min(6, "Street must be at least 6 characters")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  city: Yup.string()
    .required("City is required")
    .min(3, "City must be at least 3 characters")
    .matches("^[a-zA-Z ]*$", "Invalid City name")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  state: Yup.string()
    .required("State is required")
    .min(3, "State must be at least 3 characters")
    .matches("^[a-zA-Z ]*$", "Invalid State name")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  country: Yup.string()
    .required("Country is required")
    .min(3, "Country must be at least 3 characters")
    .matches("^[a-zA-Z ]*$", "Invalid Country name")
    .test(
      "is-not-empty-after-trim",
      "Cannot be empty. Enter valid characters",
      (value) => value.trim() !== ""
    ),
  pincode: Yup.string()
    .required("Zip code is required")
    .min(4, "Zip code must be between 4-16 characters")
    .max(16, "Zip code must be between 4-16 characters")
    .matches(/^\d+$/, "Pincode must be a number"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Invalid Phone Number: Must be 10 digits"),
  dob: Yup.string("Invalid DOB").required("DOB is required"),
});