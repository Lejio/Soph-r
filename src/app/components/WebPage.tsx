import React from "react";

function WebPage() {
  return (
    <div>
      <div className=" fixed w-full h-[80px] bg-white border-b px-8">
        <div className="max-w-[1472px] m-auto w-full h-full flex justify-between items-center">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AITFw-xfupTrxyNIsunErkOgfboA0bTszjveMjY4rHDwgSdBe9uyB7eNjFePx7KfHyZoapvapvoVVENGFEVWMMtHdFI2I-jA=s1600?source=screenshot.guru"
            className="h-[35px]"
            alt="Sopher Logo"
          />

          <div className="flex items-center">
            <ul className="flex gap-10">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#highlights">Highlights</a>
              </li>
              <li>
                <a href="#technologyUsed">Method</a>
              </li>
              <li>
                <a href="#future-considerations">Future Considerations</a>
              </li>
            </ul>
          </div>

          <div>
            <a
              href="https://www.apple.com/app-store/" // Replace with the actual URL you want to link to
              className="px-8 py-3 rounded-md bg-[#DC143C] text-white font-medium"
            >
              Visit App
            </a>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-24">
        <div className="max-w-[1480px] m-auto grid grid-cols-2 px-8 mt-5">
          <div className=" flex flex-col justify-start gap-4 px-2">
            <p className="py-1.5 text-2xl text-[#DC143C] font-medium">
              Auto-fill medical forms with virtual scribe
            </p>
            <h1 className="leading-[72px] py-2 text-6xl font-semibold">
              Save Time, Eliminate Errors, and Focus on What Matters
            </h1>
            <p className="py-2 text-lg text-gray-600">
              A HOPHACKS 2023 PROJECT
            </p>
          </div>
          <a
            className="m-auto"
            href="https://lh3.googleusercontent.com/drive-viewer/AITFw-weNB8DZgFCHjGAyfyKGOrU0b8SdHROBbOueCv3j0Tlf9P_3Y4wxhG5baf1STA6Xb7V2kdFyMXjz6znEyF3cerFqtVKkA=s2560?source=screenshot.guru"
          >
            {" "}
            <img src="https://lh3.googleusercontent.com/drive-viewer/AITFw-weNB8DZgFCHjGAyfyKGOrU0b8SdHROBbOueCv3j0Tlf9P_3Y4wxhG5baf1STA6Xb7V2kdFyMXjz6znEyF3cerFqtVKkA=s2560" />{" "}
          </a>
        </div>
      </div>

      <div id="about" className="w-full bg-white py-[70px] px-8">
        <div className="max-w-[1480px] m-auto">
          <h1 className="text-center text-4xl font-bold text-[#DC143C] my-4">
            About
          </h1>
          <p className="text-center text-[#586477] text-x1">
            Filling out medical forms is more than just tedious, it's
            nerve-wracking, and for some, like those with visual or motor
            disabilities, it's an uphill battle against stress and anxiety. The
            problems do not just end there. they are a source of medical error.
            86 Percent of healthcare mistakes are administrative, often due to
            illegible handwriting or typos when transcribing forms. Sophér,
            inspired by the Hebrew word 'Scribe,' goes beyond digitizing paper
            forms. It remembers your vital info, eliminating repetitive entries.
            Have new information? Sophér asks, saves, and autofills. We simplify
            it all in a friendly chat format, reducing stress and transforming
            healthcare forms into a stress-free experience.
          </p>
        </div>
      </div>

      <div id="highlights" className="w-full bg-white py-24">
        <h1 className="text-center text-4xl font-bold text-[#DC143C] my-6">
          Highlights
        </h1>
        <div className="md:max-w-[1480px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md overflow-hidden rounded-lg border p-7">
            <h2 className="text-center text-2xl font-bold mb-4">
              Instant Form Filling
            </h2>
            <p>
              Not all information on medical forms is time-sensitive. With our
              app, you'll only need to input information that truly matters in
              the moment, such as how you are feeling right now.
            </p>
          </div>

          <div className="bg-white shadow-md overflow-hidden rounded-lg border p-7">
            <h2 className="text-center text-2xl font-bold mb-4">
              User-Friendly Interface
            </h2>
            <p>
              Our user-friendly interface makes it easy for anyone to navigate
              and use the app.
            </p>
          </div>

          <div className="bg-white shadow-md overflow-hidden rounded-lg border p-7">
            <h2 className="text-center text-2xl font-bold mb-4">Time-Saving</h2>
            <p>
              Say goodbye to long waiting times in the clinic. With Sophér,
              you'll breeze through check-ins, making your appointments quicker
              and more efficient.
            </p>
          </div>

          <div className="bg-white shadow-md overflow-hidden rounded-lg border p-7">
            <h2 className="text-center text-2xl font-bold mb-4">
              Environmentally Friendly
            </h2>
            <p>
              Reducing the need for physical paperwork, Sophér is helping to
              save trees and reduce paper waste.
            </p>
          </div>

          <div className="bg-white shadow-md overflow-hidden rounded-lg border p-7">
            <h2 className="text-center text-2xl font-bold mb-4">
              Reduce Patient Error
            </h2>
            <p>
              Sophér ensures that your information is entered correctly every
              time, reducing the risk of mistakes that could lead to extra
              medical expenses.
            </p>
          </div>

          <div className="bg-white shadow-md overflow-hidden rounded-lg border p-5">
            <h2 className="text-center text-2xl font-bold mb-4">
              Reduce Administrative Error
            </h2>
            <p>
              86% of mistakes in the healthcare industry are administrative,
              which often occurs when transcribing information. Sophér helps
              healthcare providers by entering information only once and
              eliminating legibility errors.
            </p>
          </div>
        </div>
      </div>

      <div id="technologyUsed" className="w-full bg-white py-[50px] px-8">
        <div className="max-w-[1480px] m-auto">
          <h1 className="text-center text-4xl font-bold text-[#DC143C] my-4">
            Technology Used
          </h1>
          <p className="text-center text-[#586477] text-x1">
            We use Next.JS for front-end development. Additionally, we use
            Capacitor to port the web app into a mobile app. For back-end, we
            use a python script that recieves an image from Next.JS, formats the
            image, finds the form fields with Google OCR. We then use ChatGPT
            and prompt engineering to turn those fields into questions asked to
            the user. We feed the responses back to the original PDF and return
            a filled form to the user.
          </p>
        </div>
      </div>

      <div
        id="future-considerations"
        className="w-full bg-white py-[50px] px-8 mb-20"
      >
        <div className="max-w-[1480px] m-auto">
          <h1 className="text-center text-4xl font-bold text-[#DC143C] my-4">
            Future Considerations
          </h1>
          <p className="text-center text-[#586477] text-x1">
            Given more time, we would expand the form-filling capability to
            multiple-page documents. This would increase the efficacy of our app
            as errors are more likely to occur in longer documents.
            Additionally, we would consider implementing the option to fax, as
            this method is still widely used by hospitals and other healthcare
            providers. To make this app production-ready, we would transfer the
            data stored to PHIPA and PIPEDA-compliant cloud servers.
            Furthermore, we may even add the capability for patients to scan
            perscription labels for allergy interactions.
          </p>
        </div>
      </div>

      <div className="w-full bg-black py-4">
        <div className="max-w-[1480px] m-auto">
          <p className="text-center text-white text-sm">
            © 2023 Sophér. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebPage;
