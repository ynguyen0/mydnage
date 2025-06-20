// src/components/howitworks/components/MailSection.tsx
import mailbox from "../../../assets/mailbox.png"; // You'll need to add this image

export default function MailSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      {/* Content on the left */}
      <div className="md:w-2/3">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#393D43] mb-4">
          Drop it in the mail
        </h3>
        <p className="text-base sm:text-lg text-[#7F7F7F] leading-relaxed">
          Once your sample is ready, place it in the prepaid return envelope and
          send it back to us the same day. Our lab team will take it from there.
        </p>
      </div>

      {/* Mailbox image on the right */}
      <div className="md:w-1/3">
        <div className="rounded-full overflow-hidden bg-[#B8D7E7] aspect-square p-8">
          <img
            src={mailbox}
            alt="Mailbox"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
