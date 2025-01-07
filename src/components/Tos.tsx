import { Link } from "react-router-dom"
import Logo from "../../flat_logo_xl.png"
import Footer from "./footer/Footer"

export default function Tos() {
  return (
    <div>
      <div className="font-sans p-10 max-w-4xl mx-auto">
        <header className="flex items-center mb-10">
          <div className="text-2xl font-bold mr-5 font-['Arial_Black']">
            <img width="40px" height="40px" src={Logo} alt="Code Dome Logo" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">
              <Link to="/">Code Dome</Link>
            </h1>
          </div>
        </header>

        <h1 className="text-4xl font-bold mb-5">Terms of Service</h1>

        <p className="leading-relaxed mb-5">
          Welcome to Code Dome (Pty) Ltd (“Code Dome”). By accessing or using our website, services, or software (collectively, “Services”), you agree to these Terms of Service. If you do not agree with these terms, please refrain from using our Services.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">1. Introduction</h2>
          <p className="leading-relaxed">
            Code Dome is a software development company specializing in enterprise solutions for businesses of all sizes. We also provide Software as a Service (SaaS) solutions, including Digiceipts, a digital receipt management software.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">2. Use of Services</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>You must be at least 18 years old or have parental/guardian consent to use our Services.</li>
            <li>You agree not to use our Services for any unlawful or unauthorized purposes, including violating any applicable laws or regulations.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted through your account.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">3. Account Registration</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>To access certain features of our Services, you may be required to create an account. You agree to provide accurate and complete information during the registration process.</li>
            <li>You are solely responsible for keeping your account information current and secure.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">4. Intellectual Property</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>All content, designs, software, and other materials provided by Code Dome are the intellectual property of Code Dome or its licensors.</li>
            <li>You may not reproduce, distribute, or create derivative works from our intellectual property without prior written consent.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">5. User Content</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>By submitting content through our Services, you grant Code Dome a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, reproduce, and distribute the content for the purpose of providing our Services.</li>
            <li>You affirm that you own or have the necessary rights to the content you submit and that it does not violate the rights of any third party.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">6. Payment and Fees</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>Certain Services may require payment. By using paid Services, you agree to pay all applicable fees and taxes.</li>
            <li>Fees are non-refundable unless expressly stated otherwise.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">7. Limitation of Liability</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>Code Dome is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our Services.</li>
            <li>Our total liability to you for any claims related to the Services is limited to the amount you paid for the Services in the 12 months preceding the claim.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">8. Termination</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>We reserve the right to suspend or terminate your access to the Services at any time for violation of these terms or other applicable policies.</li>
            <li>You may discontinue use of the Services at any time by deleting your account.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">9. Governing Law</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>These Terms are governed by the laws of South Africa. Any disputes will be resolved in South African courts.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">10. Updates to Terms</h2>
          <p className="leading-relaxed">
            We may update these Terms from time to time. Continued use of our Services after changes are made constitutes your acceptance of the updated Terms.
          </p>
        </div>
      </div>
      <Footer />

    </div>
  )
}