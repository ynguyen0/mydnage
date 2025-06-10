import { useState } from "react";
import gradient2 from "../../assets/vector-2.png";
import line from "../../assets/Vector Line.png";
import {
  ClinicHeader,
  ContactInformationForm,
  AdditionalInformationForm,
} from "./components";
import type { FormData } from "./types";

export default function ClinicInquiry() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organizationName: "",
    organizationWebsite: "",
    position: "",
    referrer: [],
    kitPreference: "",
    antiAgingInterventions: "",
    customers: "",
    customerTypes: "",
    message: "",
    receiveUpdates: false,
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleReferrerChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      referrer: prev.referrer.includes(value)
        ? prev.referrer.filter((r) => r !== value)
        : [...prev.referrer, value],
    }));
  };

  const handleKitPreferenceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, kitPreference: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <main className="font-['Poppins',_ui-sans-serif,_system-ui] flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      {/* Decorative corner graphics */}
      <img
        src={gradient2}
        alt="Decorative corner graphic"
        className="
          absolute -top-15 left-0
          w-[500px] h-[500px]
          sm:w-[400px] sm:h-[400px]
          lg:w-[800px] lg:h-[800px]
          pointer-events-none
          z-0
        "
      />
      <img
        src={gradient2}
        alt="Decorative corner graphic"
        className="
          absolute top-70 left-0
          w-[500px] h-[500px]
          sm:w-[200px] sm:h-[200px]
          lg:w-[650px] lg:h-[650px]
          pointer-events-none
          z-0
        "
      />
      <img
        src={line}
        alt="Decorative corner graphic"
        className="
          absolute top-0 left-0
          w-[500px] h-[500px]
          sm:w-[200px] sm:h-[200px]
          lg:w-[500px] lg:h-[500px]
          pointer-events-none
          z-0
        "
      />

      {/* CARD - EXACTLY LIKE ABOUT PAGE */}
      <div className="relative mt-16 sm:mt-20 lg:mt-24 w-full max-w-7xl rounded-2xl bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 shadow-2xl text-sm sm:text-base lg:text-lg">
        {/* TITLE */}
        <h1 className="absolute -top-6 sm:-top-8 -left-2 sm:-left-4 lg:-left-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#393D43]">
          Clinic Inquiry
        </h1>

        {/* Header with Microscope */}
        <ClinicHeader />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Information Section */}
          <ContactInformationForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
          />

          {/* Additional Information Section */}
          <AdditionalInformationForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
            handleReferrerChange={handleReferrerChange}
            handleKitPreferenceChange={handleKitPreferenceChange}
          />
        </form>
      </div>
    </main>
  );
}
