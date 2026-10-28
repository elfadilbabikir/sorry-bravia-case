"use client";

import React, { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const checklistContent = `CLAIM READY
A free checklist for anyone about to file a warranty claim.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS FOR THE PAGE
15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

CALL TO ACTION
Download the checklist and keep it with your invoices.
Share it with a friend who just bought something expensive.

FOOTER NOTE
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.`;

    const blob = new Blob([checklistContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "claim-ready-checklist.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "CLAIM READY",
          text: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#363C47] selection:bg-[#DCF3EA] selection:text-[#065F43]">
      {/* Ticker strip */}
      <div className="w-full bg-[#EEFAF5] border-b border-[#B9E6D6] overflow-hidden py-2.5">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center space-x-10 text-[10px] font-mono font-medium tracking-[0.16em] uppercase text-[#065F43] mx-5"
            >
              <span>CLAIM READY</span>
              <span>•</span>
              <span>A WARRANTY CLAIM IS DECIDED ON RECORDS</span>
              <span>•</span>
              <span>KEEP YOURS, AND ASK FOR THEIRS IN WRITING</span>
              <span>•</span>
              <span>IF IT IS NOT IN WRITING, IT DID NOT HAPPEN</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] h-[72px]">
        <div className="max-w-[1180px] h-full mx-auto px-5 md:px-10 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#087A58]" />
            <span className="text-[18px] md:text-[20px] font-extrabold tracking-[-0.035em] text-[#0D1117]">
              CLAIM READY
            </span>
          </a>

          <a
            href="#call-to-action"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0D1117] text-white text-[13.5px] font-medium hover:bg-[#087A58] transition-colors duration-300 ease-editorial"
          >
            Download the checklist and keep it with your invoices.
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                CLAIM READY
              </div>

              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-8">
                A free checklist for anyone about to file a warranty claim.
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#call-to-action"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#087A58] text-white text-[15px] font-semibold shadow-raised hover:bg-[#066748] hover:-translate-y-0.5 transition-all duration-300 ease-editorial"
                >
                  <span>Download the checklist and keep it with your invoices.</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] rounded-[26px] p-8 md:p-10 shadow-resting">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  THE IDEA IN ONE LINE
                </div>
                <p className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] leading-[1.3] text-[#065F43]">
                  A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 md:py-32 bg-[#F7F8FA] border-y border-[#E7EAEF]">
        <div className="max-w-[880px] mx-auto px-5 md:px-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              WHO THIS IS FOR
            </span>
          </div>

          <h2 className="text-[31px] sm:text-[38px] md:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-8">
            WHO THIS IS FOR
          </h2>

          <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-8 md:p-12 shadow-resting">
            <p className="text-[17.5px] md:text-[20px] font-normal leading-[1.72] text-[#363C47]">
              Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
            </p>
          </div>
        </div>
      </section>

      {/* THE IDEA IN ONE LINE (Dark Editorial Section) */}
      <section className="py-20 md:py-32 bg-[#0D1117] text-white">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="bg-[#161B22] border border-white/10 rounded-[26px] p-8 md:p-14 relative overflow-hidden">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 text-[#34D399] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                THE IDEA IN ONE LINE
              </span>
            </div>

            <p className="text-[26px] sm:text-[34px] md:text-[42px] font-extrabold tracking-[-0.035em] leading-[1.15] text-[#34D399] max-w-[900px]">
              A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE ANYTHING GOES WRONG */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              BEFORE ANYTHING GOES WRONG
            </span>
          </div>

          <h2 className="text-[31px] sm:text-[38px] md:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-12 md:mb-16">
            BEFORE ANYTHING GOES WRONG
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                1
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Keep the invoice.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                2
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Register the product.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Many brands ask you to register on their website or app; some add extra warranty when you do.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                3
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Read the warranty card once.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Note how long it lasts, what it covers, and what it excludes.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                4
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Record the condition.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Take a few dated photos of the product once it is installed or unboxed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN THE FAULT APPEARS */}
      <section className="py-20 md:py-32 bg-[#F7F8FA] border-y border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              WHEN THE FAULT APPEARS
            </span>
          </div>

          <h2 className="text-[31px] sm:text-[38px] md:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-12 md:mb-16">
            WHEN THE FAULT APPEARS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                5
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Record the fault.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                6
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Raise the complaint in writing.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Use email, the brand&apos;s website or its app, not only a phone call, so there is a record.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                7
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Note every reference number.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Write down the complaint or ticket number, the date and the name of anyone you speak to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN A TECHNICIAN VISITS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              WHEN A TECHNICIAN VISITS
            </span>
          </div>

          <h2 className="text-[31px] sm:text-[38px] md:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-12 md:mb-16">
            WHEN A TECHNICIAN VISITS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                8
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Ask for the job sheet.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Ask the technician for a copy of the visit report or job sheet before they leave.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                9
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Ask what was tested.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Ask which test or instrument was used to reach the diagnosis.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                10
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Take your own photos.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Photograph the product and anything the technician points to, during the visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IF THE CLAIM IS REFUSED */}
      <section className="py-20 md:py-32 bg-[#F7F8FA] border-y border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              IF THE CLAIM IS REFUSED
            </span>
          </div>

          <h2 className="text-[31px] sm:text-[38px] md:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-12 md:mb-16">
            IF THE CLAIM IS REFUSED
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                11
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Ask for the reason in writing.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Request a written explanation that names the exact cause and the evidence for it.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                12
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Ask for the technical report.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                If the refusal rests on an inspection, ask for that inspection report.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                13
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Escalate inside the company.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                14
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Keep it factual.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
              </p>
            </div>

            <div className="bg-white rounded-[18px] border border-[#E7EAEF] p-7 md:p-8 shadow-resting hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial md:col-span-2 lg:col-span-1">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] font-mono text-[13px] font-semibold mb-4">
                15
              </div>
              <h3 className="text-[20px] md:text-[23px] font-extrabold tracking-[-0.035em] text-[#0D1117] mb-3">
                Know your consumer helpline.
              </h3>
              <p className="text-[17px] leading-[1.72] text-[#363C47]">
                Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY NUMBERS FOR THE PAGE */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              KEY NUMBERS FOR THE PAGE
            </span>
          </div>

          <h2 className="text-[31px] sm:text-[38px] md:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-12 md:mb-16">
            KEY NUMBERS FOR THE PAGE
          </h2>

          {/* Stat Grid with 1px hairline dividers */}
          <div className="rounded-[18px] border border-[#E7EAEF] bg-[#E7EAEF] overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-[1px] shadow-resting">
            {/* Stat 1 - Hot cell */}
            <div className="bg-white p-7 md:p-9 flex flex-col justify-between">
              <div className="text-[44px] md:text-[52px] font-extrabold tracking-[-0.035em] text-[#087A58] leading-none mb-4 font-sans [font-feature-settings:'tnum']">
                15
              </div>
              <div className="text-[13.5px] font-medium leading-[1.5] text-[#5B6472]">
                steps in the checklist.
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-7 md:p-9 flex flex-col justify-between">
              <div className="text-[44px] md:text-[52px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-none mb-4 font-sans [font-feature-settings:'tnum']">
                4
              </div>
              <div className="text-[13.5px] font-medium leading-[1.5] text-[#5B6472]">
                records to keep before anything goes wrong.
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-7 md:p-9 flex flex-col justify-between">
              <div className="text-[44px] md:text-[52px] font-extrabold tracking-[-0.035em] text-[#0D1117] leading-none mb-4 font-sans [font-feature-settings:'tnum']">
                1
              </div>
              <div className="text-[13.5px] font-medium leading-[1.5] text-[#5B6472]">
                rule: if it is not in writing, it did not happen.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="call-to-action" className="py-20 md:py-32 bg-[#F7F8FA] border-y border-[#E7EAEF]">
        <div className="max-w-[880px] mx-auto px-5 md:px-10 text-center">
          <div className="mb-4 inline-block">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              CALL TO ACTION
            </span>
          </div>

          <h2 className="text-[31px] sm:text-[38px] md:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-12">
            CALL TO ACTION
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#087A58] text-white text-[15px] font-semibold shadow-raised hover:bg-[#066748] hover:-translate-y-0.5 transition-all duration-300 ease-editorial"
            >
              Download the checklist and keep it with your invoices.
            </button>

            <button
              onClick={handleShare}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#0D1117] border border-[#E7EAEF] text-[15px] font-semibold shadow-resting hover:bg-[#F7F8FA] hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 ease-editorial"
            >
              {copied
                ? "Share it with a friend who just bought something expensive."
                : "Share it with a friend who just bought something expensive."}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE / FOOTER */}
      <footer className="py-16 bg-[#F7F8FA] border-t border-[#E7EAEF]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E7EAEF]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#087A58]" />
              <span className="text-[17px] font-extrabold tracking-[-0.035em] text-[#0D1117]">
                CLAIM READY
              </span>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] text-[10px] font-mono font-medium tracking-[0.16em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                FOOTER NOTE
              </span>
            </div>
          </div>

          <div className="pt-8 text-[13.5px] font-medium leading-[1.7] text-[#5B6472]">
            <p>
              Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
