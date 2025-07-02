import LivLogo from "../../assets/footer/LivLogo.svg?react";
import IgIcon from "../../assets/footer/instagram.svg?react";
import FbIcon from "../../assets/footer/facebook.svg?react";
import XIcon from "../../assets/footer/x.svg?react";
import YtIcon from "../../assets/footer/youtube.svg?react";
import TtIcon from "../../assets/footer/tiktok.svg?react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-harmony-500 font-[Poppins] text-neutral1-500">
      <div className="mx-auto w-full max-w-[1750px] px-6 py-16">
        {/* ───────── Row 1: logo + headline + contact ───────── */}
        <div className="flex flex-col items-start gap-6 px6 pb-6">
          {/* logo (no shrink) */}
          <LivLogo className="w-20 h-20 shrink-0 md:w-30 md:h-30" />

          {/* headline */}
          <p className="max-w-[35.9375rem] text-2xl font-bold leading-[140%] lg:text-3xl">
            Changing the way you age to live
            <br />
            healthier, longer, better.
          </p>

          <button
            className="
              inline-flex h-12 items-center justify-center rounded-[2.0625rem]
              bg-neutral1-500 px-5 py-[0.5625rem] text-harmony-500 font-semibold
              transition-opacity hover:opacity-90
            "
          >
            Contact&nbsp;Us
          </button>
        </div>

        {/* divider */}
        <hr className="my-10 border-[#AFD5E7]" />

        <div className="mt-10 flex flex-col gap-10">
          {/* newsletter + social */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between py-2">
            {/* social icons */}
            <ul className="flex justify-center gap-2">
              {[
                {
                  Icon: IgIcon,
                  url: "https://www.instagram.com/mydnage/?hl=en",
                  label: "Instagram",
                },
                {
                  Icon: FbIcon,
                  url: "https://www.facebook.com/mydnage/",
                  label: "Facebook",
                },
                {
                  Icon: XIcon,
                  url: "https://x.com/myDNAge",
                  label: "X (Twitter)",
                },
                {
                  Icon: YtIcon,
                  url: "https://www.youtube.com/channel/UChvbimcg37PSeVW-JK7yXkw/featured",
                  label: "YouTube",
                },
                {
                  Icon: TtIcon,
                  url: "https://www.tiktok.com/@mydnage",
                  label: "TikTok",
                },
              ].map(({ Icon, url, label }, i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-13 w-13 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                  >
                    <Icon className="h-13 w-13 text-neutral1-500" />
                  </a>
                </li>
              ))}
            </ul>

            {/* email form */}
            <div className="w-full max-w-[43vw]">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full"
              >
                <input
                  type="email"
                  placeholder="Enter Your Email for Updates and Special Offers"
                  className="
                    h-13 w-full rounded-[0.4375rem] bg-neutral1-500 px-4
                    text-coolgray-500 placeholder-text-coolgray-500 outline-none
                  "
                />
                <button
                  type="submit"
                  className="
                    ml-4 flex shrink-0 items-center justify-center rounded-[2.0625rem]
                    bg-neutral1-500 px-5 py-[0.6875rem] text-harmony-500 font-semibold
                    transition-opacity hover:opacity-90
                  "
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>

          {/* divider */}
          <hr className="border-[#AFD5E7]" />

          {/* legal + disclaimer row */}
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between pt-2">
            <div className="flex flex-wrap items-baseline gap-2 text-sm text-center lg:text-left">
              <p className="text-neutral-200">
                © Epimorphy LLC, 2025. All Rights Reserved.
              </p>
              <span className="text-fresh-500">|</span>
              <a href="#" className="text-fresh-500 hover:underline">
                Accessibility Statement
              </a>
              <span className="text-fresh-500">|</span>
              <a href="#" className="text-fresh-500 hover:underline">
                Privacy Policy
              </a>
              <span className="text-fresh-500">|</span>
              <span className="text-fresh-500">|</span>
              <Link
                to="/terms"
                className="text-fresh-500 hover:underline"
                onClick={() => {
                  console.log("Terms link clicked");
                  window.scrollTo(0, 0);
                }}
              >
                Terms of Use
              </Link>
            </div>

            <p className="text-justify text-[13px] leading-[1.475rem] lg:max-w-[43vw] text-neutral-200">
              The Epimorphy myDNAge® epigenetic age determination test is not
              intended to be health information or medical data or to be used to
              screen, diagnose, treat, prevent or assess risk of any disease or
              condition. The myDNAge® service is an epigenetic age determination
              test grounded on scientific research that uses marks on numerous
              places on your DNA, called methylation, which is an epigenetic
              phenomenon. The myDNAge® service is available for individuals 21
              years of age or older. This service has not been cleared or
              approved by the U.S. Food and Drug Administration.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
