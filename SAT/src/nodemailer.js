import nodemailer from "nodemailer";

export const sendMail = async ({ firstname, lastname, email, phonenumber, msg }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use any email service like Outlook, Yahoo, etc.
      auth: {
        user: "your_email@gmail.com", // Replace with your email
        pass: "your_email_password", // Replace with your email password or app password
      },
    });

    const mailOptions = {
      from: email, // Sender's email
      to: "mushushaikh456@gmail.com", // Receiver's email
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${firstname}</p>
        <p><strong>Last Name:</strong> ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phonenumber}</p>
        <p><strong>Message:</strong> ${msg}</p>
      `,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
};
