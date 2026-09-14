import { useState } from "react";
import axios from "axios";
import { FiArrowUpRight } from "react-icons/fi";
import { toast } from "react-toastify";
import { personalDetails } from "../../constants";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [userInput, setUserInput] = useState({ name: "", email: "", message: "" });
  const handleSendMail = async event => {
    event.preventDefault();
    if (isLoading) return;
    const values = Object.fromEntries(Object.entries(userInput).map(([key, value]) => [key, value.trim()]));
    const nextErrors = {};
    if (!values.name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.message) nextErrors.message = "Please include a message.";
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length) { document.getElementById(`contact-${Object.keys(nextErrors)[0]}`)?.focus(); return; }
    setIsLoading(true);
    try {
      await axios.post("https://portfoliomailer-backend.onrender.com/send-email", { ...values, to_email: personalDetails.email }, { timeout: 45000 });
      setStatus("Your message has been submitted. Thank you for reaching out!");
      toast.success("Message submitted. Thank you!");
      setUserInput({ name: "", email: "", message: "" });
    } catch {
      setStatus("Your message couldn’t be sent. Please try again or use the email link.");
    } finally { setIsLoading(false); }
  };
  return <form className="contact-form" onSubmit={handleSendMail} noValidate aria-busy={isLoading}>
    {[["name", "YOUR NAME", "What should I call you?"], ["email", "EMAIL ADDRESS", "you@example.com"], ["message", "YOUR MESSAGE", "Tell me what’s on your mind…"]].map(([key, label, placeholder]) => <div className="form-field" key={key}><label className="mono" htmlFor={`contact-${key}`}>{label}</label>{key === "message" ? <textarea id={`contact-${key}`} name={key} required rows={3} maxLength={500} placeholder={placeholder} value={userInput[key]} onChange={event => setUserInput({ ...userInput, [key]: event.target.value })} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `error-${key}` : undefined} /> : <input id={`contact-${key}`} name={key} autoComplete={key} type={key === "email" ? "email" : "text"} required maxLength={100} placeholder={placeholder} value={userInput[key]} onChange={event => setUserInput({ ...userInput, [key]: event.target.value })} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `error-${key}` : undefined} />}{errors[key] && <p id={`error-${key}`} className="field-error">{errors[key]}</p>}</div>)}
    <button type="submit" className="button button-primary" disabled={isLoading}>{isLoading ? "Sending your message…" : "Send message"}<FiArrowUpRight /></button><p role="status" className="form-status">{status}</p>
  </form>;
}
