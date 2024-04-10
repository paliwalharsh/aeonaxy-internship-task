import React, { useState } from "react";
import "../../index.css";
import { toast } from "react-toastify";

const SignUpForm = ({ onCreateAccount }) => {
  const [formData, setFormData] = useState({
    fullName: { value: "", valid: true },
    email: { value: "", valid: true },
    password: { value: "", valid: true },
    confirmPassword: { value: "", valid: true },
    agreedTerms: { value: false, valid: true },
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const isValid = value.trim() !== "" || type === "checkbox" ? true : false;
    setFormData((prevState) => ({
      ...prevState,
      [name]: { value, valid: isValid },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword, agreedTerms } = formData;
  

    if (
      fullName.value &&
      email.value &&
      password.value &&
      confirmPassword.value &&
      agreedTerms.value
    ) {

      if (password.value === confirmPassword.value) {
        onCreateAccount();
        toast.success("Sign Up Sucessfully");
      } else {
        toast.error("Passwords do not match.");
      }
    } else {
      toast.error("Please fill in all required fields and agree to the terms.");
    }
  };
  

  return (
    <div className="flex flex-col gap-10 px-[10%] md:px-body w-full py-10  justify-center items-center text-primary font-light">
      <div className="flex flex-col gap-6 justify-center items-center  w-full">
        <h2 className="text-4xl text-black font-reckless text-center">
          Get started with Teachable
        </h2>

        <p className="text-sm text-center">
          Join more than 100,000 creators who've sold over{" "}
          <span className="text-black font-normal">$1 billion</span> in courses
          and coaching.
        </p>
      </div>

      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-1 justify-start">
          <label htmlFor="fullName" className="text-sm">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName.value}
            onChange={handleChange}
            className={`w-[19rem] h-10 py-3 px-4 border rounded-md text-sm ${
              !formData.fullName.valid
                ? "border-highlights focus:border-highlights"
                : "border-[#e3e2e8] hover:border-[#cccdd3] focus:border-[#4a4f6c]"
            }`}
            required
          />
          {!formData.fullName.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 justify-start">
          <label htmlFor="email" className="text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email.value}
            onChange={handleChange}
            className={`w-[19rem] h-10 py-3 px-4 border rounded-md text-sm ${
              !formData.email.valid
                ? "border-highlights focus:border-highlights"
                : "border-[#e3e2e8] hover:border-[#cccdd3] focus:border-[#4a4f6c]"
            }`}
            required
          />
          {!formData.email.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 justify-start">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password.value}
            onChange={handleChange}
            className={`w-[19rem] h-10 py-3 px-4 border rounded-md text-sm ${
              !formData.password.valid
                ? "border-highlights focus:border-highlights"
                : "border-[#e3e2e8] hover:border-[#cccdd3] focus:border-[#4a4f6c]"
            }`}
            required
          />
          {!formData.password.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 justify-start">
          <label htmlFor="confirmPassword" className="text-sm">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword.value}
            onChange={handleChange}
            className={`w-[19rem] h-10 py-3 px-4 border rounded-md text-sm ${
              !formData.confirmPassword.valid
                ? "border-highlights focus:border-highlights"
                : "border-[#e3e2e8] hover:border-[#cccdd3] focus:border-[#4a4f6c]"
            }`}
            required
          />
          {!formData.confirmPassword.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>

        <div className="flex items-center justify-start mt-3 gap-2  w-[19rem]">
          <input
            type="checkbox"
            id="terms"
            name="agreedTerms"
            value={formData.agreedTerms.value}
            onChange={handleChange}
            className="w-4 h-4 border border-black rounded cursor-pointer custom-checkbox2"
            required
          />
          <label htmlFor="terms" className="text-xs">
            I agree to the{" "}
            <span className="text-black underline">Terms of Use</span> and{" "}
            <span className="text-black underline">Privacy Policy</span>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-2 bg-[#222323] hover:bg-[#010100] text-white flex items-center justify-center py-2 px-8 rounded-md text-sm"
        >
          Create Account
        </button>
      </div>
      <p className="text-[#212239] text-sm font-normal">
        Already have an account?{" "}
        <a href="#" className="underline">
          Log In
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;
