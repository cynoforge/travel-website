import paris from "./assets/paris.jpg";
import sydney from "./assets/sydney.jpg";
import "./App.css";
import "./Contact.css";
import ContactInfo from "./Contact.jsx";
import { CompanyContact } from "./Contact.jsx";

function ContactHeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <img src={paris} className="heropic absolute" alt="paris" />

      {/* Content Container */}
      <div className="relative flex flex-col justify-center items-center">
        {/* Main Heading */}
        <div className="text-center">
          <h1
            style={{
              background: `url(${paris})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <div className="grid grid-cols-4">
              <div></div>
              <div></div>
              <div>
                <span className="block">Keep</span>
              </div>
            </div>
            <div>
              <span className="flex justify-end">in Touch</span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ContactHeroSection />
      <div className="card contactcard">
        <ContactInfo />
      </div>
      <hr />
      <div className="card">
        <CompanyContact />
      </div>
    </>
  );
}
