
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

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    // 1. Send message to Slack
    if (slackWebhookUrl) {
      const slackPayload = {
        text: `📬 *新しいお問い合わせが届きました*`,
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '📬 新しいお問い合わせ',
              emoji: true,
            },
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*お名前:*\n${name}`,
              },
              {
                type: 'mrkdwn',
                text: `*メールアドレス:*\n<mailto:${email}|${email}>`,
              },
            ],
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*お問い合わせ内容:*\n${message}`,
            },
          },
          {
            type: 'divider',
          },
        ],
      };

      const slackResponse = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackPayload),
      });

      if (!slackResponse.ok) {
        console.error('Failed to send Slack message:', await slackResponse.text());
      }
    } else {
      console.warn('SLACK_WEBHOOK_URL is not set.');
    }

    // 2. Auto-reply Email to User
    const autoReplyContext = {
      ja: {
        subject: '【Golfary】お問い合わせありがとうございます',
        text: `${name} 様\n\nこの度はお問い合わせいただき、誠にありがとうございます。\n以下の内容でメッセージを承りました。\n\n--------------------------------------------------\n${message}\n--------------------------------------------------\n\n担当者が内容を確認次第、1〜2営業日以内にご連絡させていただきます。\n\nGolfary チーム`,
      },
      ko: {
        subject: '[Golfary] 문의해 주셔서 감사합니다',
        text: `${name} 님\n\n문의해 주셔서 진심으로 감사드립니다.\n다음과 같은 내용으로 메시지가 접수되었습니다.\n\n--------------------------------------------------\n${message}\n--------------------------------------------------\n\n담당자가 내용을 확인하는 대로 1~2영업일 이내에 답변 드리겠습니다.\n\nGolfary 팀`,
      }
    };

    const replyContent = autoReplyContext[lang as keyof typeof autoReplyContext] || autoReplyContext.ja;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: replyContent.subject,
      text: replyContent.text,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your request.' },
      { status: 500 }
    );
  }
}
