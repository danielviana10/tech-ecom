export const environment = {
  production: false,
  emailjsServiceId: 'service_r0mg3xd',
  emailjsTemplateId: 'template_a91964h',
  emailjsUserId: 'ypkB0lIF-6escuf9G',
};

if (
  !environment.emailjsServiceId ||
  !environment.emailjsTemplateId ||
  !environment.emailjsUserId
) {
  throw new Error('Missing required EmailJS environment variables');
}
