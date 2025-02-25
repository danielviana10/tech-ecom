export const environment = {
  production: false,
  emailjsServiceId: 'YOUR_EMAILJS_SERVICE_ID',
  emailjsTemplateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  emailjsUserId: 'YOUR_EMAILJS_USER_ID',
};

if (
  !environment.emailjsServiceId ||
  !environment.emailjsTemplateId ||
  !environment.emailjsUserId
) {
  throw new Error('Missing required EmailJS environment variables');
}
