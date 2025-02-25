export const environment = {
  production: false,
  emailjsServiceId: 'your-emailjs-service-id',
  emailjsTemplateId: 'your-emailjs-template-id',
  emailjsUserId: 'your-emailjs-user-id',
};

if (
  !environment.emailjsServiceId ||
  !environment.emailjsTemplateId ||
  !environment.emailjsUserId
) {
  throw new Error('Missing required EmailJS environment variables');
}
