import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST (req : NextRequest) {
    try {

        console.log("mail")

        const {to,subject,text,html} = await req.json();

        const transporter = nodemailer.createTransport({
            host : process.env.SMTP_HOST,
            port : Number(process.env.SMTP_PORT),
            secure : false,
            auth : {
                user : process.env.SMTP_USER,
                pass : process.env.SMTP_PASS
            }
        })

        const mailOptions = {
            from: process.env.SMTP_USER,
            to,
            subject,
            text,
            html
        };

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
    } catch (e) {
        console.error('Error sending email:', e);
        return NextResponse.json({ message: 'Failed to send email', e }, { status: 500 });
    }
}