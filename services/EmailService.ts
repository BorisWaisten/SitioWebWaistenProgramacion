import { EmailService, ContactFormData } from '@/types';
import * as nodemailer from 'nodemailer';

export class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
  }

  async sendEmail(data: ContactFormData): Promise<void> {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de contacto - ${data.project}`,
      html: this.generateEmailTemplate(data),
    };

    await this.transporter.sendMail(mailOptions);
  }

  private generateEmailTemplate(data: ContactFormData): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje de contacto desde tu sitio web
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #007bff; margin-bottom: 10px;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
            <p><strong>Tipo de proyecto:</strong> ${data.project}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #007bff; margin-bottom: 10px;">Mensaje:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
            <p>Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</p>
          </div>
        </div>
      </div>
    `;
  }
}

