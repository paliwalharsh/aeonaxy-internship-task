import React, { useState } from "react";
import Navbar from "../nabvar/Navbar";
import SignUpForm from "../forms/signupForm";
import AdditionalDetailsForm from "../forms/additionDetails";

const HomeComponent = () => {
  const [showAdditionalDetailsForm, setShowAdditionalDetailsForm] =
    useState(false);

  const handleCreateAccount = () => {
    setShowAdditionalDetailsForm(true);
  };

  return (
    <div className=" flex flex-col justify-top items-center  ">
      {!showAdditionalDetailsForm ? (
        <>
          <Navbar />
          <SignUpForm onCreateAccount={handleCreateAccount} />
        </>
      ) : (
        <AdditionalDetailsForm />
      )}
    </div>
  );
};

export default HomeComponent;
