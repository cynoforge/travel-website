import { IoHomeOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import paris from "./assets/paris.jpg";

export function CompanyContact() {
  return (
    <>
      <h2 className="flex justify-center">Contact Us</h2>

      <div>
        <div className="grid grid-cols-3">
          <div className="flex justify-end">
            <h3>
              <i>
                <IoHomeOutline />
              </i>{" "}
              Colombo, Sri Lanka
            </h3>
          </div>
          <div className="flex justify-center">
            <h3>
              <i>
                <FaMobileAlt />
              </i>{" "}
              +94 11 234 6874
            </h3>
          </div>
          <div>
            <h3>
              <i>
                <TfiEmail />
              </i>{" "}
              support@travelsite.com
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export function ContactHeroSection() {
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

export default function ContactInfo() {
  return (
    /* <div>
      <h2 className="h2contact"> Contact Info </h2>
      <Name />
      <Email />
      <Mobile />
      <Subject />
      <MyButton />
    </div> */

    <div>
      <h2 className="h2contact">GET IN TOUCH</h2>

      <div className="space-y-8">
        {/* Name and Email Row */}
        <div className="grid grid-cols-2 md:grid-cols-2 gaps-8">
          <div>
            <input
              type="text"
              id="txtName"
              placeholder="Name"
              className="white-placeholder bg-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              id="txtEmail"
              placeholder="E-mail"
              className="white-placeholder bg-transparent"
            />
          </div>
        </div>

        {/* Subject*/}
        <div>
          <input
            type="text"
            placeholder="Subject"
            id="txtSubject"
            className="white-placeholder bg-transparent"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Message"
            rows="4"
            className="white-placeholder bg-transparent resize-none focus:outline-none"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="transition-all duration-300 hover:scale-105"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
}
