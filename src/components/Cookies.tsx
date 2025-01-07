import { Link } from "react-router-dom"
import Logo from "../../flat_logo_xl.png"
import Footer from "./footer/Footer"

export default function Cookies() {
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

        <h1 className="text-4xl font-bold mb-5">Cookie Policy</h1>

        <p className="leading-relaxed mb-5">
          Code Dome (Pty) Ltd ("Code Dome") uses cookies to enhance your experience while using our services. This Cookie Policy explains what cookies are, how we use them, and your options regarding their use.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">1. What Are Cookies?</h2>
          <p className="leading-relaxed">
            Cookies are small text files placed on your device by a website. They allow the site to recognize your device, store preferences, and improve functionality and performance.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to function and cannot be turned off in our systems.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how visitors interact with our site by collecting and reporting information anonymously.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Enable enhanced functionality and personalization, such as remembering your preferences.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and track ad performance.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">3. Why We Use Cookies</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>To improve the performance and functionality of our website.</li>
            <li>To remember your preferences and settings.</li>
            <li>To analyze how you use our site and improve user experience.</li>
            <li>To provide personalized advertisements and content.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">4. Managing Your Cookie Preferences</h2>
          <p className="leading-relaxed">
            You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. However, disabling cookies may impact the functionality of our website.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">5. Third-Party Cookies</h2>
          <p className="leading-relaxed">
            Some cookies may be set by third-party services integrated into our site. These cookies are subject to the respective third party's privacy policies.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">6. Updates to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Please check this page periodically for updates.
          </p>
        </div>
      </div>
      <Footer />
    </div>)
}