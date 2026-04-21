import { NextResponse } from 'next/server';
import DependencyContainer from '@/container/DependencyContainer';
import { ContactFormData } from '@/types';

export async function POST(request: Request) {
  try {
    const formData: ContactFormData = await request.json();
    
    // Get services from dependency container
    const container = DependencyContainer.getInstance();
    const contactService = container.getContactService();

    const result = await contactService.submitContactForm(formData);

    if (result.success) {
      return NextResponse.json(
        { message: result.message },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: result.message },
        { status: 400 }
      );
    }

  } catch (error) {
    console.error('Error en API route:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 