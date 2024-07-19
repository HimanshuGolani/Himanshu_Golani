import { CONTACT } from "../Contents/content";

const Contact = () => {
  return (
    <div className="border-b pb-20 border-neutral-900">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className="border-b" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
