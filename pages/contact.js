import { useState } from "react";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import PostLayout from "../components/PostLayout";
import Footer from "../components/Footer";
import { H1, P } from "../components/markdown-components";

const Contact = ({ useIsDark }) => {
  const [email, setEmail] = useState("");
  const [emailEdited, setEmailEdited] = useState(false);
  const [message, setMessage] = useState("");
  const [messageEdited, setMessageEdited] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    }).then((res) => {
      if (res.status === 200) {
        setIsSent(true);
        setEmail("");
        setEmailEdited(false);
        setMessage("");
        setMessageEdited(false);
      }
    });
  };
  return (
    <>
      <Header useIsDark={useIsDark} />
      <MainLayout>
        <PostLayout>
          <H1>Contact me</H1>
          <P>You can leave me a message here. I would reply you with email.</P>
          <div className="mt-8">
            <form noValidate onSubmit={onSubmit}>
              <div className="flex flex-col gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-paper-light py-2 px-4 placeholder-moonlight outline-none transition-bg dark:bg-night-light dark:placeholder-pencil"
                    value={email}
                    onChange={(e) => {
                      setEmailEdited(true);
                      setEmail(e.target.value);
                    }}
                  />
                  <EmailInstruction value={email} emailEdited={emailEdited} />
                </div>
                <div>
                  <textarea
                    rows="8"
                    placeholder="Message"
                    className="block w-full bg-paper-light py-2 px-4 placeholder-moonlight outline-none transition-bg dark:bg-night-light dark:placeholder-pencil"
                    value={message}
                    onChange={(e) => {
                      setMessageEdited(true);
                      setMessage(e.target.value);
                    }}
                  />
                  <MessageInstruction
                    value={message}
                    messageEdited={messageEdited}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-paper-light py-2 px-4 text-ink outline-none transition-bg hover:bg-gray-100 dark:bg-night-light dark:text-light dark:hover:bg-gray-800"
                  >
                    Submit
                  </button>
                  <SubmitInstruction isSent={isSent} setIsSent={setIsSent} />
                </div>
                <div>
                  <button
                    className="w-full bg-paper-light py-2 px-4 text-ink outline-none transition-bg hover:bg-gray-100 dark:bg-night-light dark:text-light dark:hover:bg-gray-800"
                    onClick={() => {
                      setEmail("");
                      setMessage("");
                    }}
                  >
                    Clear all
                  </button>
                </div>
              </div>
            </form>
          </div>
        </PostLayout>
      </MainLayout>
      <Footer />
    </>
  );
};

const EmailInstruction = ({ value, emailEdited }) => {
  if (!emailEdited) {
    return null;
  }
  if (!value) {
    return <div className="text-xs text-red-500">Please provide an email.</div>;
  }
  const emailPattern = /^\S+@\S+\.\S+$/;
  const isEmail = emailPattern.test(value);
  if (!isEmail) {
    return (
      <div className="text-xs text-red-500">Please provide a valid email.</div>
    );
  }
  return <div className="text-xs text-green-500">Good!</div>;
};

const MessageInstruction = ({ value, messageEdited }) => {
  if (!messageEdited) {
    return null;
  }
  if (!value) {
    return (
      <div className="text-xs text-red-500">Please provide some messages.</div>
    );
  }
  return <div className="text-xs text-green-500">Good!</div>;
};

const SubmitInstruction = ({ isSent, setIsSent }) => {
  if (isSent) {
    setTimeout(() => {
      setIsSent(false);
    }, 1500);
    return (
      <div className="animate-fadeout-1500-0 text-xs text-green-500 opacity-100">
        Successfully sent!
      </div>
    );
  }
  return null;
};

export default Contact;
