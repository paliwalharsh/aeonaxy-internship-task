import React, { useState } from "react";
import "../../index.css";

const AdditionalDetailsForm = () => {
  const [AdditionalDetailsData, setAdditionalDetailsData] = useState({
    businessStatus: { value: "", valid: true },
    organizationSize: { value: "", valid: true },
    teachingStatus: { value: "", valid: true },
    audienceSize: { value: "", valid: true },
    incomeLevel: { value: "", valid: true },
    preparedContent: { value: "", valid: true },
    weeklyTime: { value: "", valid: true },
    preferences: { value: [], valid: true },
  });


  const preferencesOptions = [
    { value: "createCourse", label: "Create an online course" },
    { value: "createCoachingProgram", label: "Create a coaching program" },
    {
      value: "createDigitalDownload",
      label:
        "Create a digital download (ebook, article, template, worksheet, etc.)",
    },
    { value: "createCommunity", label: "Create a community or forum" },
    { value: "createPreSell", label: "Create a pre-sell" },
    { value: "notSure", label: "I'm not sure yet" },
    { value: "somethingElse", label: "Something else (please tell us more)" },
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      let newValue;
      if (checked) {
        newValue = [...AdditionalDetailsData[name].value, value];
      } else {
        newValue = AdditionalDetailsData[name].value.filter(
          (option) => option !== value
        );
      }

      const isValid = newValue.length > 0 && newValue.length <= 3;

      setAdditionalDetailsData((prevState) => ({
        ...prevState,
        [name]: { value: newValue, valid: isValid },
      }));
    } else {
      const isValid = value !== "";

      setAdditionalDetailsData((prevState) => ({
        ...prevState,
        [name]: { value, valid: isValid },
      }));
    }
  };

  const handleNext = (e) => {};

  return (
    <>
      <div className=" h-2 relative w-full bg-[#e8e4ec]">
        <div className="absolute top-0 left-0 w-1/2 h-full rounded-full bg-secondary"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full  bg-[#e8e4ec]"></div>
      </div>
      <div className="flex flex-col gap-6 px-[10%] md:px-body w-full py-16  justify-start items-start text-black font-light">
        <h2 className="text-4xl text-black font-reckless">
          Tell us a little more about yourself
        </h2>
        <p className="text-base my-4 font-normal">
          Your answers will help us build an experience to match your needs.
        </p>

        <div className="flex flex-col gap-0.5  items-start w-full text-base font-normal">
          <label htmlFor="businessStatus">
            Do you currently run an online business?
          </label>
          <select
            name="businessStatus"
            value={AdditionalDetailsData.businessStatus.value}
            onChange={handleChange}
            className={`w-full h-10 py-2 px-3 border rounded-md text-sm border-[#4a4f6c] custom-dropdown`}
            required
          >
            <option value="">Please choose an option...</option>
            <option value="Just Exploring">No, just exploring!</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {!AdditionalDetailsData.businessStatus.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5 items-start w-full text-base font-normal">
          <label htmlFor="organizationSize">I primarly identify as a:</label>
          <select
            name="organizationSize"
            value={AdditionalDetailsData.organizationSize.value}
            onChange={handleChange}
            className={`w-full h-10 py-2 px-3 border rounded-md text-sm border-[#4a4f6c] custom-dropdown`}
            required
          >
            <option value="">Please choose an option...</option>
            <option value="Freelancer or Consultant">
              Freelancer or Consultant (product-based-work)
            </option>
            <option value="Small Bussiness Owner (2-10)">
              Small Bussiness Owner (2-10)
            </option>
            <option value="Medium Bussiness Owner (11-50)">
              Medium Bussiness Owner (11-50)
            </option>
            <option value="Large Bussiness Owner (51+)">
              Large Bussiness Owner (51+)
            </option>
          </select>
          {!AdditionalDetailsData.organizationSize.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5 items-start w-full text-base font-normal">
          {" "}
          <label htmlFor="teachingStatus">
            Are you already teaching or offering content online?
          </label>
          <select
            name="teachingStatus"
            value={AdditionalDetailsData.teachingStatus.value}
            onChange={handleChange}
            className={`w-full h-10 py-2 px-3 border rounded-md text-sm border-[#4a4f6c] custom-dropdown`}
            required
          >
            <option value="">Please choose an option...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {!AdditionalDetailsData.teachingStatus.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5 items-start w-full text-base font-normal">
          <label htmlFor="audienceSize">
            How big is your current audience (email list, social media
            followers, subscribers, etc.)?
          </label>
          <select
            name="audienceSize"
            value={AdditionalDetailsData.audienceSize.value}
            onChange={handleChange}
            className={`w-full h-10 py-2 px-3 border rounded-md text-sm border-[#4a4f6c] custom-dropdown`}
            required
          >
            <option value="">Please choose an option...</option>
            <option value="Small (0-1000)">Small (0-1000)</option>
            <option value="Medium (1001-10000)">Medium (1001-10000)</option>
            <option value="Large (10000+)">Large (10000+)</option>
          </select>
          {!AdditionalDetailsData.audienceSize.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5 items-start w-full text-base font-normal">
          <label htmlFor="incomeLevel">
            Approximately how much money do you make charging for your knowledge
            today (in courses, consulting, books, speaking, etc.)? We ask this
            so that we can provide you with relevant resources for the size and
            stage of your business.
          </label>
          <select
            name="incomeLevel"
            value={AdditionalDetailsData.incomeLevel.value}
            onChange={handleChange}
            className={`w-full h-10 py-2 px-3 border rounded-md text-sm border-[#4a4f6c] custom-dropdown`}
            required
          >
            <option value="">Please choose an option...</option>
            <option value="Less than $1000">Less than $1000</option>
            <option value="$1000 - $5000">$1000 - $5000</option>
            <option value="$5000 - $10000">$5000 - $10000</option>
            <option value="$10000+">$10000+</option>
          </select>
          {!AdditionalDetailsData.incomeLevel.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5 items-start w-full text-base font-normal">
          <label htmlFor="preparedContent">
            How much content or training material (videos, worksheets,
            downloads, etc.) have you already prepared?
          </label>
          <select
            name="preparedContent"
            value={AdditionalDetailsData.preparedContent.value}
            onChange={handleChange}
            className={`w-full h-10 py-2 px-3 border rounded-md text-sm border-[#4a4f6c] custom-dropdown`}
            required
          >
            <option value="">Please choose an option...</option>
            <option value="None">None</option>
            <option value="Some">Some</option>
            <option value="A lot">A lot</option>
          </select>
          {!AdditionalDetailsData.preparedContent.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 items-start w-full text-base font-normal">
          <label>
            What are you hoping to do first on Teachable? (Select up to 3 to get
            started as quickly as possible)
          </label>
          {preferencesOptions.map((option) => (
            <div key={option.value}>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="preferences"
                  value={option.value}
                  checked={AdditionalDetailsData.preferences.value.includes(
                    option.value
                  )}
                  onChange={handleChange}
                  className="  cursor-pointer custom-checkbox"
                />
                {option.label}
              </label>
            </div>
          ))}
          {!AdditionalDetailsData.preferences.valid && (
            <span className="text-highlights text-sm">
            This field is required / Please select up to three options.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-0.5 items-start w-full text-base font-normal">
          <label htmlFor="weeklyTime">
            How much time can you spend on your Teachable courses/products per
            week?
          </label>
          <select
            name="weeklyTime"
            value={AdditionalDetailsData.weeklyTime.value}
            onChange={handleChange}
            className={`w-full h-10 py-2 px-3 border rounded-md text-sm border-[#4a4f6c] custom-dropdown`}
            required
          >
            <option value="">Please choose an option...</option>
            <option value="Less than 5 hours">Less than 5 hours</option>
            <option value="5-10 hours">5-10 hours</option>
            <option value="More than 10 hours">More than 10 hours</option>
          </select>
          {!AdditionalDetailsData.weeklyTime.valid && (
            <span className="text-highlights text-sm">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex justify-end items-end">
          <button
            onSubmit={handleNext}
            className="my-8 border border-[#222323] hover:bg-[#f2f3f3] text-black font-medium flex items-center justify-center py-2 px-10 rounded-md text-sm md:w-fit w-full"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AdditionalDetailsForm;
