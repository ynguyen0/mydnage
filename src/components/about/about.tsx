import "../../index.css"; // Import global styles
import woman from "../../assets/stylish-woman-in-the-urban-setting-SBI-304380469 1.png";
import man from "../../assets/young-black-man-training-and-playing-with-his-white-labrador-dog-through-the-city-park-SBI-351227918 1.png"
import left from "../../assets/Left Image.png"

export default function About() {
  return (
    <main className="font-['Poppins',_ui-sans-serif,_system-ui] flex min-h-screen w-full items-center justify-center bg-[#BFDBE8]">
      {/* CARD ----------------------------------------------------------- */}
      <div className="relative mt-24 w-full max-w-screen-2xl rounded-2xl bg-white px-20 py-8 shadow-2xl lg:text-xl">
        {/* TITLE  ------------------------------------ */}
        <h1 className="absolute -top-8 -left-6 text-6xl font-extrabold tracking-tight text-[#393D43]">
          Our Science
        </h1>

        {/* HEADER ------------------------------------------------------- */}
        <header className="text-left">
          <h2 className="mt-12 text-2xl font-semibold leading-snug text-[#393D43] lg:text-5xl">
            The rate at which you age is not just governed by your genetics—your
            lifestyle and environment also play an important role.
          </h2>

          <p className="mb-6 pt-6 text-2xl leading-snug text-[#7F7F7F] lg:text-4xl">
            Liv’s state-of-the-art MyDNAge clock leverages the latest epigenetic
            research to give you an accurate and reliable measure of your biological age.
          </p>
        </header>

        {/* BODY + IMAGE ------------------------------------------------- */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          {/* TEXT BLOCK */}
          <section className="max-w-prose text-center text-lg leading-relaxed text-[#7F7F7F] md:text-left md:text-2xl py-4">
            <p>
              The original MyDNAge clock was built on the pioneering work of
              Steve Horvath, Ph.D., a world-renowned geneticist and aging
              researcher at UCLA. His breakthrough in the field of epigenetics—
              the study of how external and internal factors influence gene
              expression without altering the DNA sequence—revealed that
              specific molecular changes on DNA could act as reliable biomarkers
              of aging. MyDNAge builds on Horvath’s cutting-edge work, detecting
              important DNA-methylation sites across the genome to calculate
              your biological age with impressive accuracy.
            </p>
          </section>

          {/* IMAGE */}
          <img
            src={woman}
            alt="Stylish woman in an urban setting"
            className="ml-[60px] h-[340px] w-[340px] rounded-full object-cover shadow-lg md:h-85 md:w-85"
          />
        </div>

        <header className="text-left">
          <h2 className="mt-12 text-2xl font-semibold leading-snug text-[#393D43] lg:text-5xl">
            What is epigenetics?
          </h2>

          <p className="pt-6 text-2xl leading-snug text-[#7F7F7F] lg:text-4xl">
            Many geneticists describe the genome as the hardware of a computer. The epigenome, 
            in contrast, is the software, telling your DNA hardware what to do. Simply explained, 
            the epigenome provides your cells with instructions about where, when, and how much 
            each gene should be expressed.  
          </p>
        </header>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          {/* TEXT BLOCK */}
          <section className="text-center text-lg leading-relaxed text-[#7F7F7F] md:text-left md:text-2xl py-4">
            <p className="mb-6">
              These instructions don’t change your DNA sequence, but they can and do influence gene expression, or turning 
              your genes on or off. In general, certain types of epigenetic activity, like methylation, can silence gene expression, 
              which translates to the gene in question becoming less active and producing fewer associated proteins. In other cases, 
              methylation fine-tunes gene activity rather than turning it off completely. The result? Your body can regulate which 
              proteins are made, when they are made, and how much are made—helping cells respond to internal and external conditions 
              without changing your underlying genetic code. 
            </p>
            <p>
              That’s the beauty of epigenetics: it acts like a dimmer switch for your genes, 
              not a rewrite of your DNA. And this dimmer switch is highly responsive to your environment. Things like stress, diet, sleep, 
              toxins, and physical activity can all influence methylation patterns and, consequently, gene activity.
            </p>
          </section>
        </div>

          <img
            src={man}
            alt="Young black man training and playing with his white labrador dog through the city park"
            className="mx-auto mb-6"
          />
          <section className="text-center text-lg leading-relaxed text-[#7F7F7F] md:text-left md:text-2xl py-4">
          <p className="text-right ml-auto">
            The epigenome, in contrast, is the software, telling your DNA hardware what to do.
          </p>
          </section>

          <header className="text-left">
          <h2 className="mt-12 text-2xl font-semibold leading-snug text-[#393D43] lg:text-5xl">
            What is DNA methylation?
          </h2>

          <p className="pt-6 text-2xl leading-snug text-[#7F7F7F] lg:text-4xl">
            Each strand of DNA in your body is made up of special building blocks called nucleotides. Their bases, adenine (A), guanine (G), 
            cytosine (C), and thymine (T), are what make your DNA, well, yours. Your DNA is different from others because of the specific 
            sequence of those bases, which come together to make a distinct code.
          </p>
        </header>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          {/* TEXT BLOCK */}
          <section className="text-center text-lg leading-relaxed text-[#7F7F7F] md:text-left md:text-2xl py-4">
            <p className="mb-6">
              Methylation is one type of epigenetic program that lets your genes know when to increase, decrease, or stop expression by adding one or more 
              methyl groups to your DNA. If epigenetics is DNA software, methyl groups as the high-level programming code telling the genome which genes to
              express and how quickly to express them. 
            </p>
            <p className="mb-6">
              <b>MyDNAge</b> investigates thousands of age-related methylation sites across the genome to accurately predict an individual's biological age. It is even
              sophisticated enough to let users know if certain organs in their body are aging faster than others.
            </p>
            <p className="mb-6">
              DNA methylation is an incredibly dynamic process, and methylation programming code often changes based on our lifestyle choices and health status. As such,
              it both gives us unique insights into our individual health and longevity and, empowered with the right information, allows us to alter it through healther
              habits.
            </p>
          </section>
        </div>

        <header className="text-left">
          <h2 className="mt-12 text-2xl font-semibold leading-snug text-[#393D43] lg:text-5xl">
            What is the Epi-Metabolic Score?
          </h2>
        </header>

        <img
            src={left}
            alt="Man exercising outside"
            className="mx-auto mb-6"
          />

          <section className="text-center text-lg leading-relaxed text-[#7F7F7F] md:text-left md:text-2xl py-4">
            <p className="mb-6">
              This unique index leverages the latest scientific research to highlight methylation marks on dozens of genes implicated in insulin resistance, 
              chronic inflammation, lipid metabolism, and energy regulation- all factors linked to the development of obesity and Type 2 diabetes. In a single
              index, your EMS can provide you with an accurate snapshot of your current metabolic efficiency and fitness. It can provide crucial information to
              help you adopt the kind of diet and exercise changes necessary to support a metabolism biologically younger than your chronological age.
            </p>
          </section>

        </div>
    </main>
  );
}
