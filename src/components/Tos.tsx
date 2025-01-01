import Logo from "../../flat_logo_xl.png"

export default function Tos() {
    return (
        <div className="font-sans p-10 max-w-4xl mx-auto">
          <header className="flex items-center mb-10">
            <div className="text-2xl font-bold mr-5 font-['Arial_Black']"><img width="40px" height="40px" src={Logo} /></div>
            <div><h1 className="text-3xl font-semibold"><a href="/">Code Dome</a></h1></div>
          </header>
    
          <h1 className="text-4xl font-bold mb-5">Terms of Service</h1>
    
          <p className="leading-relaxed mb-5">
            Welcome to Code Dome (Pty) Ltd (“Code Dome”). By using our website, services, or software (“Services”), you agree to the following terms. If you do not agree, please refrain from using our Services.
          </p>
    
          <div className="mb-8">
            <h2 className="text-2xl font-medium mt-8 mb-3">1. Use of Services</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>You must be at least 18 years old or have parental/guardian consent to use our Services.</li>
              <li>You agree not to use our Services for any unlawful or unauthorized purposes.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-2xl font-medium mt-8 mb-3">2. Intellectual Property</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>All content and software provided by Code Dome are the intellectual property of Code Dome or its licensors.</li>
              <li>You may not copy, modify, or distribute our content or software without express written consent.</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-2xl font-medium mt-8 mb-3">3. User Content</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>By submitting content through our Services, you grant Code Dome a non-exclusive, worldwide, royalty-free license to use, modify, and distribute the content as necessary to provide the Services.</li>
              <li>You are responsible for the legality and accuracy of any content you submit.</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-2xl font-medium mt-8 mb-3">4. Limitation of Liability</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>Code Dome will not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.</li>
              <li>Our total liability for any claims related to the Services is limited to the amount paid by you for the Services within the 12 months preceding the claim.</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-2xl font-medium mt-8 mb-3">5. Termination</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>We may suspend or terminate your access to the Services at any time for violations of these terms.</li>
              <li>You may discontinue use of the Services at any time.</li>
            </ul>
          </div>
    
          <div className="mb-8">
            <h2 className="text-2xl font-medium mt-8 mb-3">6. Governing Law</h2>
            <ul className="list-disc pl-6 leading-relaxed">
              <li>These terms are governed by the laws of South Africa.</li>
              <li>Any disputes will be subject to the exclusive jurisdiction of South African courts.</li>
            </ul>
          </div>
        </div>)
}