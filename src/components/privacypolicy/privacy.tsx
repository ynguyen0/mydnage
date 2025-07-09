import "../../index.css";
import gradient2 from "../../assets/vector-2.png";
import line from "../../assets/Vector Line.png";

export default function PrivacyPolicy() {
  return (
    <main className="font-['Poppins',_ui-sans-serif,_system-ui] flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
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

      {/* CARD */}
      <div className="relative mt-16 sm:mt-20 lg:mt-24 w-full max-w-7xl rounded-2xl bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 shadow-2xl text-sm sm:text-base lg:text-lg">
        {/* TITLE */}
        <h1 className="absolute -top-6 sm:-top-8 -left-2 sm:-left-4 lg:-left-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#393D43]">
          Privacy Policy
        </h1>

        {/* HEADER */}
        <header className="text-left">
          <p className="mt-6 sm:mt-8 lg:mt-10 mb-3 sm:mb-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug text-[#7F7F7F]">
            Please read through this thoroughly to understand the legalities
            behind our service.
          </p>
        </header>

        {/* MAIN CONTENT */}
        <div className="text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#7F7F7F] py-2">
          <p className="mb-6">
            These terms of service (the "Terms") apply for the myDNAge
            epigenetic age determination service (the "Service") when you use
            the myDNAge website or other mobile application (collectively the
            "Site") operated by Epimorphy, LLC. These Terms are a legal contract
            between you and Epimorphy, LLC (referred to as "Epimorphy", also
            referred to as "We", or "US", herein). By checking the box when
            checking out for your order of the Service you agree to these Terms.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            1. Updates and Disclaimer
          </h2>
          <p className="mb-4">
            We may change or modify the Terms at any time for any reason at our
            sole discretion. The most current version of the Terms (and Privacy
            Policy) can be viewed clicking on the "Terms of Service" (or
            "Privacy Policy" Link) link at the bottom of the page of our Site.
            By ordering our Service and using our Site you agree to these Terms
            and our Privacy Policy.
          </p>
          <p className="mb-6">
            The Epimorphy myDNAge epigenetic age determination test is not
            intended to be health information or medical data or to be used to
            screen, diagnose, treat, prevent or assess risk of any disease or
            condition. The myDNAge service is an epigenetic age determination
            test grounded on scientific research that uses marks on numerous
            places on your DNA, called methylation, which is an epigenetic
            phenomenon. The myDNAge service is available for individuals 21
            years of age or older. This service has not been cleared or approved
            by U. S. Food and Drug Administration.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            2. Ordering the Service
          </h2>
          <p className="mb-6">
            You promise that you are 21 years of age when ordering the Service
            and agree and acknowledge to this requirement for ordering the
            Service. Further, you agree to provide a sample ("Sample") under
            your order and that we own the Sample material ("DNA", "RNA", or
            "protein") and data generated therefrom once it is received. This
            means we may use this Sample and data generated from the Sample for
            our purposes for improving our understanding of biological age
            without limitation. We require that you complete our standard
            questionnaire as a condition for us providing the Service. We may
            change our questionnaire from time to time at our sole discretion.
            In some cases, we may require a second or more questionnaires which
            will be communicated to you before you order the Service. If you do
            not complete the questionnaire or questionnaires, we will not
            activate your kit or process your Sample for the Service. Once you
            submit your order for the Service, we will not cancel the order or
            refund your fee. The fee we charge you is a processing fee, which we
            do not refund even if we cannot complete the Service for any reason;
            for example due to sample or processing problems or issues, or if
            you change your mind immediately after ordering or if the report we
            provide to you is not to your liking. This is true regardless of how
            soon after submission you might attempt to request cancellation of
            the order. Therefore, please review ALL information carefully prior
            to ordering the Service via the Site. You may order for others such
            as for family members or friends, but each such individual must
            create their own account to activate their Sample kit on our Site.
            We will report the result of the myDNAge test determined from our
            analysis of your sample in a report comprising a biological age
            determination only. No other data related to the analysis or our
            methodology will be provided (e.g. the DNA methylation value and CpG
            loci used for our analysis will not be reported; no information on
            our algorithm will be reported). Your report will be accessible from
            our website or mailed to you upon request. We reserve the right to
            change the format and content of the report at any time for any
            reason and may do so from time to time.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            3. Sample Requirements
          </h2>
          <p className="mb-6">
            We provide you one sample collection kit including instructions for
            use for sample types of urine or blood (vacutainer or lancet)
            (collectively, "Sample") based on your selection on the Site. This
            Sample kit is designed to provide for enough sample material ("DNA")
            for processing and performing the myDNAge epigenetic age
            determination service (the Service") two times. If your Sample does
            not provide enough DNA we will notify you and send one replacement
            Sample kit for a second attempt to process your Sample. If the
            replacement Sample kit does not provide enough DNA for performing
            the Service, you agree this terminates the order and agree that must
            pay for any replacement Sample kit or re-order paying for Service
            again.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            4. Privacy
          </h2>
          <p className="mb-6">
            By using the Services and Site you indicate that you understand the
            information collection, use, and disclosure practices described in
            the Privacy Policy.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            5. Your Representations
          </h2>
          <p className="mb-4">
            By ordering the Service and using the Site you agree, acknowledge
            and promise the following is true and that you have the legal
            authority in the jurisdiction in which you reside to make these
            statements:
          </p>
          <p className="mb-2">
            5.1 You understand and acknowledge that the Service and its myDNAge
            epigenetic age determination Service is not intended to be health
            information or medical data or to be used to screen, diagnose,
            treat, prevent or assess risk of any disease or condition.
          </p>
          <p className="mb-2">
            5.2 You give permission for Epimorphy and its Research Laboratory or
            other associates to process your Sample and perform the myDNAge
            epigenetic age determination on the Sample and to use the Sample and
            data generated therefrom per these Terms. We will deidentify Sample
            and data of personally identifiable information to the extent
            reasonably possible and as set forth in our Privacy Policy.
          </p>
          <p className="mb-2">
            5.3 You represent that you are an individual person and are 21 years
            of age or older and are legally authorized to order the Service.
          </p>
          <p className="mb-2">
            5.4 You understand that by providing your Sample processed for the
            Service that you do not acquire any rights to any intellectual
            property of any kind in the Service or improvements made to the
            Service or new Services or products made therefrom.
          </p>
          <p className="mb-2">
            5.5 You promise that you are not a covered entity or business
            associate of a covered entity as defined under federal law or an
            insurance company or employer seeking information on a policy holder
            or employee.
          </p>
          <p className="mb-2">
            5.6 You promise that the information that you provide for the
            Service is accurate to the best of your knowledge and that the
            Sample is your sample.
          </p>
          <p className="mb-6">
            5.7 You agree and accept that completing our questionnaire or
            questionnaires is a condition for us providing the Service.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            6. Copyright, Trademark and Intellectual Property
          </h2>
          <p className="mb-6">
            All materials on the Site, including but not limited to written
            content, images, illustrations, downloads, audio clips, and video
            clips ('Material') are owned or controlled by Epimorphy and are
            protected by worldwide copyright laws (as well as trademark and
            other applicable intellectual property laws). You may download
            Material only for your personal, non-commercial purposes (viewing,
            reading and retaining for reference) but no modification or further
            reproduction of the content is permitted. The content may otherwise
            not be copied or used in any way. UNAUTHORIZED COPYING,
            REPRODUCTION, REPUBLISHING, UPLOADING, DOWNLOADING, POSTING,
            TRANSMITTING, DISTRIBUTION, OR DUPLICATING OF ANY OF THE MATERIAL
            (WHETHER FOR COMMERCIAL OR NON-COMMERCIAL PURPOSES) IS PROHIBITED.
            All rights in the product names, company names, trade names, logos,
            service marks, trade dress, slogans, product packaging, and designs
            of the Services, whether or not appearing in large print or with the
            trademark symbol, belong exclusively to Epimorphy or its licensors
            and are protected from reproduction, imitation, dilution, or
            confusing or misleading uses under national and international
            trademark and copyright laws. The use or misuse of these trademarks
            or any materials, except as permitted herein, is expressly
            prohibited, and nothing stated or implied on the Services confers on
            you any license or right under any patent or trademark of Epimorphy,
            or its associates (e.g. Research Laboratory or other associate), or
            any third party.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            7. Prohibitions
          </h2>
          <p className="mb-6">
            You may not access or use, or attempt to access or use, the Services
            to take any action that could harm us or any third party, interfere
            with the operation of the Services, or use the Services in a manner
            that violates any laws.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            8. Registration
          </h2>
          <p className="mb-6">
            To register for the Service, you will create login credentials by
            providing an email address to us and by selecting a username and
            password. You also provide us certain information during the
            registration process, which you agree to keep accurate and updated.
            Each login is for a single user only. You are not allowed to share
            or disclose your login credentials with any other user or person. We
            may cancel or suspend your access to the Service and Site if you
            share your credentials. You will be responsible for all usage and
            activity on your account, including use of the account by any third
            party authorized by you to use your login credentials, and for all
            charges for any goods or services. You are also responsible for all
            statements made or materials posted under your account, including
            liability for harm caused by such statements or materials. You may
            not transfer, sell, or otherwise assign your rights or obligations
            under these Terms. You must be 21 years or older to use the Service
            and Site. Any fraudulent, abusive, or otherwise illegal activity may
            be grounds for termination of your account, at our sole discretion,
            and we may refer you to appropriate law enforcement agencies.
          </p>

          {/* Continue with sections 9-15... */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            9. Third Party Content
          </h2>
          <p className="mb-6">
            The Services may contain third-party owned content and links to
            other websites ("Linked Sites"). We do not endorse, sponsor,
            recommend, or otherwise accept responsibility for any Linked Sites.
            In addition, Linked Sites are not under the control of Epimorphy.
            Epimorphy is not responsible for the content or privacy practices of
            the Linked Sites.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            10. Disclaimer of Warranties
          </h2>
          <p className="mb-6">
            THE SERVICE IS PROVIDED "AS IS." WE DO NOT WARRANT THAT THE SERVICES
            WILL BE UNINTERRUPTED OR ERROR-FREE. THERE MAY BE DELAYS, OMISSIONS,
            INTERRUPTIONS, AND INACCURACIES IN THE SITE FROM TIME TO TIME. IF
            YOU RELY ON THE SERVICE AND ANY MATERIALS MADE AVAILABLE THROUGH THE
            SERVICES, YOU DO SO SOLELY AT YOUR OWN RISK. WITHOUT LIMITING THE
            GENERALITY OF THE FOREGOING, EPIMORPHY DISCLAIMS TO THE MAXIMUM
            EXTENT PERMITTED BY LAW ANY AND ALL (A) WARRANTIES OF
            MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, (B) WARRANTIES
            AGAINST INFRINGEMENT OF ANY THIRD-PARTY INTELLECTUAL PROPERTY OR
            PROPRIETARY RIGHTS, (C) WARRANTIES RELATING TO THE TRANSMISSION OR
            DELIVERY OF THE SERVICE, (D) WARRANTIES RELATING TO THE ACCURACY,
            RELIABILITY, CORRECTNESS, TIMELINESS OR COMPLETENESS OF DATA MADE
            AVAILABLE ON THE SERVICE OR OTHERWISE BY EPIMORPHY, INCLUDING ANY
            ADVICE, OPINION, STATEMENT, OR OTHER MATERIAL OR DATA DISPLAYED,
            UPLOADED OR DISTRIBUTED IN THE SERVICE OR AVAILABLE THROUGH THE
            SITE, AND WARRANTIES OTHERWISE RELATING TO PERFORMANCE,
            NONPERFORMANCE, OR OTHER ACTS OR OMISSIONS BY THE EPIMORPHY OR ANY
            THIRD PARTY. FURTHER, THERE IS NO WARRANTY THAT THE SERVICE WILL
            MEET YOUR NEEDS OR REQUIREMENTS OR THE NEEDS OR REQUIREMENTS OF ANY
            OTHER PERSON. EPIMORPHY MAKES NO WARRANTIES OR REPRESENTATIONS,
            EXPRESS OR IMPLIED (A) THAT THE INFORMATION PROVIDED THROUGH THE
            SERVICE WILL BE FREE FROM ERROR, OMISSION, INTERRUPTION, DEFECT, OR
            DELAY IN OPERATION, OR FROM TECHNICAL INACCURACIES OR TYPOGRAPHICAL
            ERRORS, (B) THAT THE SERVICES WILL BE AVAILABLE AT ANY PARTICULAR
            TIME OR LOCATION (C) THAT DEFECTS OR ERRORS IN THE SERVICES WILL BE
            CORRECTED, OR (D) THAT THE CONTENT ON THE SERVICE ARE FREE OF
            VIRUSES OR OTHER HARMFUL COMPONENTS. ANY INFORMATION ON THE SERVICES
            IS SUBJECT TO CHANGE WITHOUT NOTICE, AND THE EPIMORPHY DISCLAIMS ALL
            RESPONSIBILITY FOR THE SERVICE. WE RESERVE THE RIGHT TO CORRECT ANY
            ERRORS OR OMISSIONS IN THE SERVICE.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            11. Limitation of Liability
          </h2>
          <p className="mb-6">
            IN NO EVENT WILL THE EPIMORPHY OR ITS RESEARH LABORATORY, ASSOCIATES
            OR AFFILIATES OR ANY PARTY INVOLVED IN CREATING, PRODUCING, OR
            DELIVERING THE SERVICE BE LIABLE FOR ANY DIRECT, INCIDENTAL,
            CONSEQUENTIAL, INDIRECT, SPECIAL, OR PUNITIVE DAMAGES ARISING OUT OF
            YOUR ACCESS, USE, MISUSE, OR INABILITY TO USE THE SERVICE OR ANY
            LINKED SITES, OR IN CONNECTION WITH ANY FAILURE OF PERFORMANCE,
            ERROR, TRANSMISSION, COMPUTER VIRUS, OR LINE OR SYSTEM FAILURE.
            THESE LIMITATIONS APPLY WHETHER THE ALLEGED LIABILITY IS BASED ON
            CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, INTELLECTUAL PROPERTY
            INFRINGEMENT, PRIVACY OR ANY OTHER BASIS, EVEN IF THE EPIMORPHY HAS
            BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. BECAUSE SOME
            JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL
            OR CONSEQUENTIAL DAMAGES, EPIMORPHY'S LIABILITY IN SUCH
            JURISDICTIONS SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            12. Indemnification
          </h2>
          <p className="mb-6">
            You shall indemnify and hold harmless Epimorphy, including its
            officers, directors, employees, and agents including its Research
            Laboratory associate and other associates from any and all
            liability, claims, loss, damages, expenses, or judgments (including
            court or arbitration costs and attorneys' fees) arising from an act
            or omission or representation of you for violation of the Terms or
            use of the report and data generated from the Service performed by
            Epimorphy. We reserve the right to take over the exclusive defense
            of any claim for which we are entitled to indemnification under this
            Section. In such event, you shall provide us with such cooperation
            as is reasonably requested by us.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            13. Governing law and Dispute Resolution
          </h2>
          <p className="mb-6">
            This Agreement shall be construed and interpreted in accordance with
            the laws of the state of Delaware without regard to conflict of law
            principles. Both parties to this Agreement agree that disputes may
            arise from time to time with regard to either party's rights or
            obligations under this Agreement and further agrees to negotiate in
            good faith for at least sixty (60) days to seek resolution of any
            such dispute before third parties may be asked to interpret this
            Agreement for any such dispute. The parties also agree that all such
            remaining disputes shall be resolved by final and binding
            arbitration by a panel of three (3) arbitrators designated by the
            American Arbitration Association ("AAA") by its rules for complex
            commercial transactions in effect on the effective date of this
            Agreement. Any arbitration under this Agreement shall be in Irvine
            or Costa Mesa, California. Except as required by law, the parties,
            their representatives, other participants, and the arbitrator shall
            hold the existence, content and result of the arbitration in
            confidence. Nothing in this clause shall be construed to preclude a
            party from seeking injunctive relief to protect its rights pending
            arbitration. A request by a party to a court for such injunctive
            relief shall not be deemed a waiver of the obligation to arbitrate.
            By using the Service, you waive any claims that may arise under the
            laws of other states, countries, territories or jurisdictions.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            14. Termination
          </h2>
          <p className="mb-6">
            Epimorphy may terminate this agreement for any reason at any time.
            Epimorphy reserves the right, in its sole discretion, to restrict,
            suspend, or terminate your access to and use of the Service, with or
            without prior notice. Otherwise applicable sections of the Terms
            shall survive termination. In addition to any termination rights, we
            reserve the right to enforce and prosecute any violations of these
            Terms.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[#393D43] mb-4">
            15. General
          </h2>
          <p className="mb-6">
            No Waiver. The failure of Epimorphy to enforce any provisions of the
            Terms or to respond to a breach by you or other parties shall not in
            any way waive its rights to enforce subsequently any terms or
            conditions of the Terms or to act with respect with similar
            breaches. You agree that no joint venture, partnership, employment,
            or agency relationship exists between you and Epimorphy as a result
            of these Terms or your access to and use of the Services. Unless
            otherwise specified herein, the Terms constitute the entire
            agreement between you and Epimorphy and govern your use of the
            Service and Site. If any portion of the Terms is held invalid or
            unenforceable, that portion shall be construed in a manner
            consistent with applicable law to reflect, as nearly as possible,
            the original intention of the parties, and the remaining portions
            shall remain in full force and effect.
          </p>
        </div>
      </div>
    </main>
  );
}
