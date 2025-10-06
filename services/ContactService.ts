import { ContactFormData, EmailService } from '@/types';

export class ContactService {
  constructor(private emailService: EmailService) {}

  async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // Validar datos
      const validationResult = this.validateContactData(data);
      if (!validationResult.isValid) {
        return {
          success: false,
          message: validationResult.message,
        };
      }

      // Enviar email
      await this.emailService.sendEmail(data);

      return {
        success: true,
        message: 'Mensaje enviado correctamente',
      };
    } catch (error) {
      console.error('Error en ContactService:', error);
      return {
        success: false,
        message: 'Error interno del servidor',
      };
    }
  }

  private validateContactData(data: ContactFormData): { isValid: boolean; message: string } {
    if (!data.name || data.name.trim().length === 0) {
      return { isValid: false, message: 'El nombre es requerido' };
    }

    if (!data.email || data.email.trim().length === 0) {
      return { isValid: false, message: 'El email es requerido' };
    }

    if (!this.isValidEmail(data.email)) {
      return { isValid: false, message: 'El formato del email no es válido' };
    }

    if (!data.project || data.project.trim().length === 0) {
      return { isValid: false, message: 'El tipo de proyecto es requerido' };
    }

    if (!data.message || data.message.trim().length === 0) {
      return { isValid: false, message: 'El mensaje es requerido' };
    }

    if (data.message.trim().length < 10) {
      return { isValid: false, message: 'El mensaje debe tener al menos 10 caracteres' };
    }

    return { isValid: true, message: '' };
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

