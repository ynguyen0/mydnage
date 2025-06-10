export interface FormData {
    name: string;
    email: string;
    phone: string;
    organizationName: string;
    organizationWebsite: string;
    position: string;
    referrer: string[];
    kitPreference: string;
    antiAgingInterventions: string;
    customers: string;
    customerTypes: string;
    message: string;
    receiveUpdates: boolean;
    agreeToTerms: boolean;
  }
  
  export interface FormInputProps {
    formData: FormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleReferrerChange?: (value: string) => void;
    handleKitPreferenceChange?: (value: string) => void;
  }