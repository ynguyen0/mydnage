import type { FormInputProps } from "../types";
import { ANTI_AGING_OPTIONS } from "../constants";

export default function ContactInformationForm({
  formData,
  handleInputChange,
}: FormInputProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#393D43] mb-6">
        Contact Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent placeholder-gray-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent placeholder-gray-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          required
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent placeholder-gray-500"
        />
        <input
          type="text"
          name="organizationName"
          placeholder="Organization Name*"
          required
          value={formData.organizationName}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent placeholder-gray-500"
        />
        <input
          type="url"
          name="organizationWebsite"
          placeholder="Organization Website*"
          required
          value={formData.organizationWebsite}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent placeholder-gray-500"
        />
        <input
          type="text"
          name="position"
          placeholder="Position*"
          required
          value={formData.position}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent placeholder-gray-500"
        />
      </div>

      {/* Anti-aging interventions dropdown */}
      <div className="mt-4">
        <label className="text-[#393D43] mb-2 block">
          Do you actively engage in anti-aging interventions?
        </label>
        <select
          name="antiAgingInterventions"
          value={formData.antiAgingInterventions}
          onChange={handleInputChange}
          className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7FA8] focus:border-transparent bg-white"
        >
          {ANTI_AGING_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
