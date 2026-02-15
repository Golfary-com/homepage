
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, lang = 'ja' } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to Admin (Golfary)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'golfary.jp@gmail.com',
      subject: `New Inquiry from ${name} (${email})`,
      text: `
        Name: ${name}
        Email: ${email}
        Language: ${lang}
        Message:
        ${message}
      `,
      html: `
        <h3>New Inquiry from Golfary Homepage</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Language:</strong> ${lang}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 2. Auto-reply Email to User
    const autoReplyContext = {
      ja: {
        subject: '【Golfary】お問い合わせありがとうございます',
        text: `${name} 様\n\nこの度はお問い合わせいただき、誠にありがとうございます。\n以下の内容でメッセージを承りました。\n\n--------------------------------------------------\n${message}\n--------------------------------------------------\n\n担当者が内容を確認次第、できるだけ早く（1〜2週間以内に）ご連絡させていただきます。\n\nGolfary チーム`,
      },
      ko: {
        subject: '[Golfary] 문의해 주셔서 감사합니다',
        text: `${name} 님\n\n문의해 주셔서 진심으로 감사드립니다.\n다음과 같은 내용으로 메시지가 접수되었습니다.\n\n--------------------------------------------------\n${message}\n--------------------------------------------------\n\n담당자가 내용을 확인하는 대로 최대한 빠르게(1~2주 이내) 답변 드리겠습니다.\n\nGolfary 팀`,
      }
    };

    const replyContent = autoReplyContext[lang as keyof typeof autoReplyContext] || autoReplyContext.ja;

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: replyContent.subject,
      text: replyContent.text,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
