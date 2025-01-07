import { Link } from "react-router-dom"
import Logo from "../../flat_logo_xl.png"
import Footer from "./footer/Footer"

export default function Cookies() {
  return (
    <div>
      <div className="font-sans p-10 max-w-4xl mx-auto">
        <header className="flex items-center mb-10">
          <div className="text-2xl font-bold mr-5 font-['Arial_Black']"><img width="40px" height="40px" src={Logo} /></div>
          <div><h1 className="text-3xl font-semibold"><Link to="/">Code Dome</Link></h1></div>
        </header>

        <h1 className="text-4xl font-bold mb-5">Cookie Policy</h1>

        <p className="leading-relaxed mb-5">
          This Cookie Policy explains how Code Dome uses cookies on our website.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">1. What Are Cookies?</h2>
          <p className="leading-relaxed">
            Cookies are small text files stored on your device by a website you visit. They allow the website to recognize your device and remember certain information (e.g., your preferences or browsing history).
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 leading-relaxed">
            <li><strong>Necessary Cookies:</strong> Essential for our website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our website, so we can improve it.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver targeted advertising based on your browsing behavior.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">3. Managing Cookies</h2>
          <p className="leading-relaxed">
            You can manage or disable cookies through your browser settings. However, please note that disabling cookies may affect the functionality of our website.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">4. Third-Party Cookies</h2>
          <p className="leading-relaxed">
            We may use third-party services that place cookies on your device (e.g., Google Analytics). Please refer to the third party's cookie policy for more information.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-medium mt-8 mb-3">5. Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Cookie Policy from time to time. Changes will be posted on this page.
          </p>
        </div>

        <h2 className="text-2xl font-medium mt-8 mb-3">Contact Us</h2>
        <p className="leading-relaxed">
          For questions about this policy, please contact us at: <a href="mailto:info@codedome.co.za" className="text-blue-500 underline">info@codedome.co.za</a>
        </p>
      </div>
      <Footer /></div>)
}