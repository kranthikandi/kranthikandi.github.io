# Portfolio Website - Setup Instructions

## Contact Form Setup

Your portfolio includes a contact form that sends emails using [Formspree](https://formspree.io/). Follow these steps to activate it:

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (Free plan includes 50 submissions/month)
3. Verify your email address

### Step 2: Create a New Form

1. Click "New Form" in your Formspree dashboard
2. Give your form a name (e.g., "Portfolio Contact Form")
3. You'll receive a unique form endpoint URL like: `https://formspree.io/f/YOUR_FORM_ID`

### Step 3: Update Your Website

1. Open `index.html`
2. Find line 516: `<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. Save the file

### Step 4: Configure Email Notifications

1. In Formspree dashboard, click on your form
2. Go to Settings → Email Notifications
3. Set your email address (kranthikumar.kandi@gmail.com) to receive notifications
4. Customize the email template if desired

### Step 5: Test the Form

1. Deploy your website
2. Fill out the contact form with test data
3. Submit and check your email
4. You should receive the form submission in your inbox!

## Optional: Form Settings

### Spam Protection
- Formspree includes built-in spam protection
- You can enable reCAPTCHA in the form settings for extra protection

### Auto-Response
- Set up an automatic reply to people who contact you
- Go to Settings → Auto-Responder in Formspree

### Custom Thank You Page
- Redirect users to a custom page after submission
- Add `_next` field or configure in Formspree settings

## Alternative: Use a Different Email Service

If you prefer not to use Formspree, you can use alternatives like:

- **EmailJS**: [https://www.emailjs.com/](https://www.emailjs.com/)
- **Web3Forms**: [https://web3forms.com/](https://web3forms.com/)
- **Basin**: [https://usebasin.com/](https://usebasin.com/)

## Features Included

✅ AI-Powered Chatbot project showcase
✅ Functional contact form with email notifications
✅ Real-time form validation
✅ Loading states and success/error messages
✅ Fully responsive design
✅ Smooth animations and transitions

## Deployment

1. Push all changes to your GitHub repository
2. GitHub Pages will automatically deploy
3. Your site will be live at: https://kranthikandi.github.io

## Need Help?

If you have any issues setting up the contact form or need to make changes, feel free to reach out!

---

**Note**: Remember to commit and push your changes after updating the Formspree form ID!
