import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { email, message } = req.body;
    const mailData = {
      to: "b00502013@gmail.com",
      from: "notifications@jimmylin.org",
      subject: `${email} wants to contact you!`,
      text: `${email}: ${message}`,
      html: `<p>${email}: ${message}<p/>`,
    };
    try {
      await sgMail.send(mailData);
      res.status(200).end();
    } catch (error) {
      const message = `Email is not sent because of ${error}.`;
      res.status(400).json({ message });
    }
  } else {
    const message = "Please use POST method.";
    res.status(405).json({ message });
  }
};

export default handler;
