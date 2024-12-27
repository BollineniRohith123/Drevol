# Drevol.ai - Enterprise AI Solutions Platform

This guide provides detailed instructions for deploying the Drevol.ai website on Hostinger and setting up the contact form functionality.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Building the Application](#building-the-application)
3. [Hosting on Hostinger](#hosting-on-hostinger)
4. [Domain Configuration](#domain-configuration)
5. [Contact Form Setup](#contact-form-setup)
6. [Environment Variables](#environment-variables)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before deployment, ensure you have:
- Node.js (v18 or higher)
- pnpm package manager
- A Hostinger account
- Your domain name
- Email service credentials (for contact form)

## Building the Application

1. Install dependencies:
```bash
pnpm install
```

2. Build the application:
```bash
pnpm build
```

This will create a `.next` directory with the production build.

## Hosting on Hostinger

1. **Prepare for Upload**
   - Log in to your Hostinger control panel
   - Navigate to "Hosting" → Select your hosting plan
   - Click on "File Manager"

2. **Upload Files**
   - Create a new directory for your website (e.g., `public_html`)
   - Upload the following files and directories:
     - `.next` directory
     - `public` directory
     - `package.json`
     - `next.config.mjs`
     - `.env` file (with your environment variables)

3. **Configure Node.js**
   - In Hostinger control panel, go to "Advanced" → "Node.js"
   - Enable Node.js support
   - Set the Node.js version to 18.x or higher
   - Set the startup file to: `node_modules/next/dist/bin/next start`
   - Set the application root path to your website directory

4. **Install Dependencies**
   - Access SSH terminal through Hostinger
   - Navigate to your website directory
   - Run: `npm install --production`

## Domain Configuration

1. **DNS Settings**
   - In Hostinger control panel, go to "Domains"
   - Select your domain
   - Click "DNS Zone Editor"

2. **Configure A Records**
   - Add/Edit A record:
     - Host: @ or your subdomain
     - Points to: Your Hostinger server IP
     - TTL: 14400

3. **SSL Certificate**
   - Go to "SSL" in Hostinger panel
   - Select "Setup" for your domain
   - Choose "SSL/TLS Certificate"
   - Follow the installation wizard

## Contact Form Setup

The contact form uses a serverless function to handle submissions. When users click "Send Message", the form data is processed as follows:

1. **Form Processing**
   ```typescript
   // The form submission is handled in /src/pages/api/contact.ts
   // Data is sent to your specified email address
   ```

2. **Email Configuration**
   - Set up the following environment variables:
     - `SMTP_HOST`: Your SMTP server host
     - `SMTP_PORT`: SMTP port (usually 587)
     - `SMTP_USER`: Your email username
     - `SMTP_PASS`: Your email password
     - `CONTACT_EMAIL`: Email address to receive form submissions

3. **Testing the Form**
   - Fill out the contact form on your website
   - Check for the email in your inbox
   - Verify all fields are being received correctly

## Environment Variables

Create a `.env` file in your root directory with these variables:

```env
# Email Configuration
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
CONTACT_EMAIL=recipient@domain.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Troubleshooting

Common issues and solutions:

1. **502 Bad Gateway**
   - Check Node.js configuration in Hostinger
   - Verify all dependencies are installed
   - Check server logs for errors

2. **Contact Form Not Working**
   - Verify environment variables are set correctly
   - Check SMTP credentials
   - Look for errors in server logs

3. **SSL Issues**
   - Ensure SSL certificate is properly installed
   - Check force HTTPS is enabled
   - Verify all assets are loaded over HTTPS

4. **Performance Issues**
   - Enable Hostinger's LiteSpeed Cache
   - Verify Node.js version is correct
   - Check server resources usage

For additional support:
- Contact Hostinger support
- Check Hostinger's knowledge base
- Review Next.js deployment documentation

## Maintenance

Regular maintenance tasks:
1. Keep Node.js version updated
2. Monitor server logs
3. Update npm packages regularly
4. Backup your files and database
5. Monitor form submissions and email delivery

## Security Considerations

1. Always use HTTPS
2. Keep environment variables secure
3. Regularly update dependencies
4. Implement rate limiting for the contact form
5. Monitor for suspicious activities

For any additional assistance or questions, please contact Hostinger support or refer to their documentation.