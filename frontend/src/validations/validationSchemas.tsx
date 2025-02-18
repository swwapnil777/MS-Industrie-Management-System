// validations/validationSchemas.ts
import * as Yup from "yup";

export interface LoginCredentials {
  email?: string;
  password: string;
  role: string;
}

export const LoginValidateYupSchema: Yup.Schema<LoginCredentials> = Yup.object({
  email: Yup.string()
    .email("Enter the valid email address")
    .required("email is Required!"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),
  role: Yup.string().required("role is required"),
});
