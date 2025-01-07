import Logo from "../../flat_logo_xl.png"
import Footer from "./footer/Footer"

export default function PrivacyPolicy() {
  return (<> <div className="font-sans p-10 max-w-4xl mx-auto">
    <header className="flex items-center mb-10">
      <div className="text-2xl font-bold mr-5 font-['Arial_Black']">
        <img width="40px" height="40px" src={Logo} alt="Code Dome Logo" />
      </div>
      <div>
        <h1 className="text-3xl font-semibold">
          <a href="/" className="hover:underline">Code Dome</a>
        </h1>
      </div>
    </header>

    <h1 className="text-4xl font-bold mb-5">Privacy Policy</h1>
    <p className="leading-relaxed mb-5">
      At Code Dome (Pty) Ltd ("Code Dome"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Services.
    </p>

    <div className="mb-8">
      <h2 className="text-2xl font-medium mt-8 mb-3">1. Information We Collect</h2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li><strong>Personal Information:</strong> We may collect your name, email address, phone number, billing details, and other information required to provide our Services.</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our website and software, including IP addresses, browser types, and pages visited.</li>
        <li><strong>Cookies:</strong> Small text files used to improve your experience. See our Cookie Policy for more details.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-medium mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li>To provide, operate, and maintain our Services.</li>
        <li>To communicate with you about updates, support, and promotional offers.</li>
        <li>To analyze usage trends and improve our Services.</li>
        <li>To comply with legal obligations and enforce our Terms of Service.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-medium mt-8 mb-3">3. Sharing Your Information</h2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li>We do not sell your personal information to third parties.</li>
        <li>We may share your data with trusted third parties, such as payment processors or service providers, solely for the purpose of delivering our Services.</li>
        <li>We may disclose information as required by law or to protect our rights and safety.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-medium mt-8 mb-3">4. Your Rights</h2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li>You have the right to access, correct, or delete your personal information.</li>
        <li>You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails.</li>
        <li>You can manage your cookie preferences through your browser settings.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-medium mt-8 mb-3">5. Data Security</h2>
      <ul className="list-disc pl-6 leading-relaxed">
        <li>We implement industry-standard security measures to protect your data.</li>
        <li>However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</li>
      </ul>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-medium mt-8 mb-3">6. Retention of Information</h2>
      <p className="leading-relaxed">
        We retain your information as long as necessary to provide our Services and comply with legal obligations. When no longer required, we securely delete or anonymize your data.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-medium mt-8 mb-3">7. Changes to This Policy</h2>
      <p className="leading-relaxed">
        We may update this Privacy Policy from time to time. Changes will be posted on this page, and significant changes may be communicated via email or notifications.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="text-2xl font-medium mt-8 mb-3">8. Contact Us</h2>
      <p className="leading-relaxed">
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@codedome.co.za" className="text-green-500 hover:underline">privacy@codedome.com</a>.
      </p>
    </div>
  </div><Footer /></>)
}