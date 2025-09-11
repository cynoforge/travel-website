import "./App.css";
import "./Contact.css";
import ContactInfo from "./Contact.jsx";
import { CompanyContact } from "./Contact.jsx";
import { ContactHeroSection } from "./Contact.jsx";

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
