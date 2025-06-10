import type { FormInputProps } from "../types";
import { REFERRER_OPTIONS, KIT_PREFERENCE_OPTIONS } from "../constants";

export default function AdditionalInformationForm({
  formData,
  handleInputChange,
  handleCheckboxChange,
  handleReferrerChange,
  handleKitPreferenceChange,
}: FormInputProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#393D43] mb-6">
        Additional Information
      </h3>

      {/* Referrer */}
      <div className="mb-6">
        <p className="text-[#393D43] mb-3">Referrer*</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {REFERRER_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.referrer.includes(option)}
                onChange={() => handleReferrerChange?.(option)}
                className="w-4 h-4 text-[#4F7FA8] rounded focus:ring-[#4F7FA8]"
              />
              <span className="text-[#393D43]">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Kit Preferences */}
      <div className="mb-6">
        <p className="text-[#393D43] mb-3">Kit Preference*</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {KIT_PREFERENCE_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="kitPreference"
                value={option}
                checked={formData.kitPreference === option}
                onChange={() => handleKitPreferenceChange?.(option)}
                className="w-4 h-4 text-[#4F7FA8] focus:ring-[#4F7FA8]"
              />
              <span className="text-[#393D43]">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Customer Questions */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-[#393D43] mb-2 block">
              Approximately how many customers are you serving per month?*
            </label>
            <input
              type="text"
              name="customers"
              required
              value={formData.customers}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent"
            />
          </div>
          <div>
            <label className="text-[#393D43] mb-2 block">
              Who are your customers (e.g. patients, physicians, fitness
              members, direct-to-consumers, etc.)?*
            </label>
            <input
              type="text"
              name="customerTypes"
              required
              value={formData.customerTypes}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="text-[#393D43] text-sm mb-2 block">
          Message*{" "}
          <span className="text-gray-500 float-right">Max 500 characters</span>
        </label>
        <textarea
          name="message"
          required
          maxLength={500}
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent resize-none"
        />
        <p className="text-sm text-gray-500 mt-1 text-right">*Required</p>
      </div>

      {/* Checkboxes */}
      <div className="space-y-3 mb-6">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="receiveUpdates"
            checked={formData.receiveUpdates}
            onChange={handleCheckboxChange}
            className="w-4 h-4 mt-1 text-[#4F7FA8] rounded focus:ring-[#4F7FA8]"
          />
          <span className="text-[#393D43] text-sm">
            Receive updates on promotions and the latest products and services.
          </span>
        </label>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="agreeToTerms"
            required
            checked={formData.agreeToTerms}
            onChange={handleCheckboxChange}
            className="w-4 h-4 mt-1 text-[#4F7FA8] rounded focus:ring-[#4F7FA8]"
          />
          <span className="text-[#393D43] text-sm">
            I agree to the{" "}
            <a href="#" className="text-[#4F7FA8] underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#4F7FA8] underline">
              Privacy Policy
            </a>
            .*
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#393D43] text-[#AFD5E7] px-8 py-3 rounded-full font-semibold hover:bg-[#2e3237] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4F7FA8]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
