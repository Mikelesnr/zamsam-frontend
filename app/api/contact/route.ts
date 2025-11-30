// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1️⃣ Send confirmation to the client
    await transporter.sendMail({
      from: `"Zamsam Engineering" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      text: `Hello ${name},\n\nThank you for reaching out! We’ve received your message and will respond soon.\n\nYour message:\n${message}\n\n— Zamsam Engineering`,
    });

    // 2️⃣ Send notification to yourself
    await transporter.sendMail({
      from: `"Zamsam Engineering" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER, // your own email
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
