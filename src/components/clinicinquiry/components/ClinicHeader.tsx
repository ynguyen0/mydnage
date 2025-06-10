import microscope from "../../../assets/microscope.png";
import { CONTACT_INFO } from "../constants";

export default function ClinicHeader() {
  return (
    <>
      {/* Microscope Image - with top padding to account for overlapping title */}
      <div className="flex justify-center mt-10 sm:mt-12 mb-8">
        <img
          src={microscope}
          alt="Microscope"
          className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[900px] h-[300px] sm:h-[350px] md:h-[400px] object-contain"
        />
      </div>

      {/* Become a Clinic Partner Section */}
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#4F7FA8] mb-4">
          Become a Clinic Partner
        </h2>
        <p className="text-[#7F7F7F] text-base sm:text-lg">
          If you have any questions or concerns, feel free to reach out to us!
          We often respond within 24 hours.
        </p>
        <p className="mt-2 text-left">
          <span className="font-bold text-black">{CONTACT_INFO.phone}</span> |
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-[#4F7FA8] ml-1 hover:underline"
          >
            {CONTACT_INFO.email}
          </a>
        </p>
      </div>
    </>
  );
}
