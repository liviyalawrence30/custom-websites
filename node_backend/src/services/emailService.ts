import tls from "tls";
import { settings } from "../core/config.js";

export class EmailService {
  public static async sendEmail(recipient: string, subject: string, body: string): Promise<void> {
    return new Promise((resolve) => {
      const email = settings.EMAIL_ADDRESS;
      const pass = settings.EMAIL_PASSWORD.replace(/\s+/g, ""); // strip any spaces in app password

      if (!email || !pass) {
        console.warn("[EmailService] EMAIL_ADDRESS or EMAIL_PASSWORD not set in .env. Skipping SMTP email.");
        return resolve();
      }

      console.log(`📧 [EmailService]: Connecting to Gmail SMTP server for recipient: ${recipient}...`);

      const socket = tls.connect(465, "smtp.gmail.com", { rejectUnauthorized: false }, () => {
        let step = 0;

        socket.on("data", (data) => {
          const response = data.toString();

          if (step === 0 && response.startsWith("220")) {
            socket.write("EHLO localhost\r\n");
            step = 1;
          } else if (step === 1 && response.startsWith("250")) {
            socket.write("AUTH LOGIN\r\n");
            step = 2;
          } else if (step === 2 && response.startsWith("334")) {
            socket.write(Buffer.from(email).toString("base64") + "\r\n");
            step = 3;
          } else if (step === 3 && response.startsWith("334")) {
            socket.write(Buffer.from(pass).toString("base64") + "\r\n");
            step = 4;
          } else if (step === 4 && response.startsWith("235")) {
            // Authenticated successfully
            socket.write(`MAIL FROM:<${email}>\r\n`);
            step = 5;
          } else if (step === 5 && response.startsWith("250")) {
            socket.write(`RCPT TO:<${recipient}>\r\n`);
            step = 6;
          } else if (step === 6 && response.startsWith("250")) {
            socket.write("DATA\r\n");
            step = 7;
          } else if (step === 7 && response.startsWith("354")) {
            const rawMessage = [
              `From: "Custom Websites" <${email}>`,
              `To: ${recipient}`,
              `Reply-To: ${email}`,
              `Subject: ${subject}`,
              `Date: ${new Date().toUTCString()}`,
              `Message-ID: <${Date.now()}.${Math.random().toString(36).substring(2)}@gmail.com>`,
              `MIME-Version: 1.0`,
              `Content-Type: text/plain; charset=utf-8`,
              ``,
              body,
              `.`,
            ].join("\r\n");

            socket.write(rawMessage + "\r\n");
            step = 8;
          } else if (step === 8 && response.startsWith("250")) {
            console.log(`✅ [EmailService]: Email successfully delivered to ${recipient}!`);
            socket.write("QUIT\r\n");
            socket.end();
            resolve();
          } else if (response.startsWith("5")) {
            console.error(`❌ [EmailService]: SMTP Error: ${response.trim()}`);
            socket.end();
            resolve();
          }
        });
      });

      socket.on("error", (err) => {
        console.error(`❌ [EmailService]: Socket Connection Error: ${err.message}`);
        resolve();
      });
    });
  }
}
