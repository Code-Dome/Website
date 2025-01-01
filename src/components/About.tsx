import Navbar from "./Navbar";
import Logo from "../../flat_logo_xl.png"

export default function About() {
    return (<>
    <Navbar />
     <div className="relative bg-gradient-to-br from-[#71D9C7]/10 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div>
          <div className="font-sans p-10 max-w-4xl mx-auto">
          <header className="flex items-center mb-10">
            <div className="text-2xl font-bold mr-5 font-['Arial_Black']"><img width="40px" height="40px" src={Logo} /></div>
            <div><h1 className="text-3xl font-semibold"><a href="/">Code Dome</a></h1></div>
          </header>
    
          <h1 className="text-4xl font-bold mb-5">About Us</h1>

<p className="leading-relaxed mb-5">
  Welcome to <strong>Code Dome</strong>, where innovation meets excellence. At Code Dome, we specialize in creating tailored software solutions that empower businesses to achieve their goals. With a team of dedicated experts and a shared passion for technology, we are committed to solving complex business problems with creativity and precision.
</p>

<h2 className="text-3xl font-medium mt-8 mb-5">Who We Are</h2>

<p className="leading-relaxed mb-5">
  Code Dome is a South African software development company that provides custom enterprise solutions for businesses of all sizes. From small businesses to large corporations, we deliver cutting-edge IT solutions that are both innovative and practical. Our mission is to empower your vision by combining technical expertise with a client-focused approach.
</p>

<p className="leading-relaxed mb-5">
  With over 20 years of collective experience, we continuously push boundaries and experiment with the latest technologies to ensure our clients stay ahead in their industries. At the heart of Code Dome lies a family-oriented culture that values collaboration, professionalism, and excellence in every project.
</p>

<h2 className="text-3xl font-medium mt-8 mb-5">Our Vision</h2>

<p className="leading-relaxed mb-5">
  To expand globally and set industry standards by leveraging the exceptional skills of South African engineers. Our ultimate goal is to have a massive impact worldwide, solving business problems with precision and ingenuity.
</p>

<h2 className="text-3xl font-medium mt-8 mb-5">Meet Our Founders</h2>

<div className="mb-8">
  <h3 className="text-2xl font-semibold mt-8 mb-3">Brandon-Lee Schultz - Software Engineer</h3>
  <p className="leading-relaxed">
    Brandon-Lee brings a wealth of expertise and leadership to Code Dome. With a strong background in software development and a vision for global impact, he is dedicated to driving innovation and excellence in every project. As a co-founder, Brandon-Lee is committed to ensuring that Code Dome delivers solutions that empower businesses to thrive in an ever-changing technological landscape.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-2xl font-semibold mt-8 mb-3">Akiel Amod - Business Analyst</h3>
  <p className="leading-relaxed">
    Akiel is a master of business analytics and stakeholder management. As the public officer for SARS, Akhil ensures that all technical and business requirements are up to date and seamlessly integrated into our solutions. His ability to align business goals with technical execution makes him an invaluable part of the team.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-2xl font-semibold mt-8 mb-3">Asanda Mkhize - Software Engineer</h3>
  <p className="leading-relaxed">
    Asanda’s passion for design and development shines through in every project. From creating stunning templates to writing efficient code, Asanda ensures that our solutions are both functional and aesthetically pleasing. His dedication to innovation and creativity is the backbone of our user-centric designs.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-2xl font-semibold mt-8 mb-3">Ethan Ankadu - Software Engineer</h3>
  <p className="leading-relaxed">
    Ethan is the go-to expert for network and infrastructure solutions. His ability to design robust foundational systems ensures that our clients receive solutions that are both scalable and secure. With a deep love for programming and foundational work, Ethan is committed to building reliable systems that stand the test of time.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-2xl font-semibold mt-8 mb-3">Angelo Chettiar - Software Engineer</h3>
  <p className="leading-relaxed">
    Angelo’s meticulous approach to coding and standards ensures that every solution meets the highest quality benchmarks. As a senior developer, Angelo focuses on creating maintainable, efficient, and cutting-edge software that solves real-world problems. His expertise guarantees that our solutions are built to last.
  </p>
</div>

<h2 className="text-3xl font-medium mt-8 mb-5">Why Choose Us?</h2>

<ul className="list-disc pl-6 leading-relaxed mb-5">
  <li><strong>Custom Solutions</strong>: Every business is unique, and so are our solutions.</li>
  <li><strong>Expert Team</strong>: Our team consists of seasoned professionals who are passionate about technology.</li>
  <li><strong>Global Impact</strong>: We aim to deliver solutions that are not only effective but also make a difference on a global scale.</li>
  <li><strong>Client Satisfaction</strong>: Your success is our priority. We ensure that every project is delivered with the highest standards of quality and professionalism.</li>
</ul>

<p className="leading-relaxed">
  Join us on our journey to redefine software development and create solutions that truly empower your vision. Let’s build something extraordinary together.
</p>
</div>
          </div>
        </div>
      </div>
    </div></>)
}