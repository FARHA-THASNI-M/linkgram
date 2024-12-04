import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Terms = () => {
  const navigate = useNavigate(); 
  const goBack = () => {
    navigate('/'); 
  };

  return (
    <div style={{ padding: '20px' }}>
      
      <button
        onClick={goBack}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#f54291',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Back to Home
      </button>

      {/* Terms and Conditions Content */}
      <h1>Terms and Conditions</h1>
      <p><strong>Updated Date: 04-12-2024</strong></p>
      <p>
        Welcome to LinkGram ("the App," "we," "us," or "our"). These Terms and Conditions ("Terms") govern your use of the App. By using the App, you agree to abide by these Terms. If you do not agree with these Terms, please do not use the App.
      </p>

      <h3>1. Acceptance of Terms</h3>
      <p>
        By accessing or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using the App on behalf of an organization, you represent and warrant that you have the authority to enter into these Terms on behalf of the organization.
      </p>

      <h3>2. Use of the App</h3>
      <p><strong>2.1 Eligibility:</strong></p>
      <p>
        You must be at least 13 years old to use the App. By using the App, you affirm that you are at least 13 years old or have obtained parental consent.
      </p>
      <p><strong>2.2 User Accounts:</strong></p>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate, current, and complete information during the registration process and to promptly update such information to ensure its accuracy.
      </p>
      <p><strong>2.3 Prohibited Activities:</strong></p>
      <p>
        You agree not to use the App for any unlawful, harmful, fraudulent, or malicious purposes. This includes, but is not limited to, distributing harmful content, impersonating others, engaging in harassment, or violating the rights of others.
      </p>

      <h3>3. User-Generated Content</h3>
      <p><strong>3.1 Ownership:</strong></p>
      <p>
        You retain ownership of the content you post, share, or upload on the App. However, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, and distribute your content for the purpose of operating and improving the App.
      </p>
      <p><strong>3.2 Content Guidelines:</strong></p>
      <p>
        You agree not to post or share content that is offensive, discriminatory, or violates the rights of others. We reserve the right to remove or moderate content that violates our guidelines.
      </p>

      <h3>4. Intellectual Property</h3>
      <p>
        All intellectual property rights in the App, including design, logos, trademarks, and content, are owned by us or our licensors. You may not use our intellectual property without our prior written consent.
      </p>

      <h3>5. Privacy</h3>
      <p>
        Your use of the App is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the App, you consent to the practices described in the Privacy Policy.
      </p>

      <h3>6. Limitation of Liability</h3>
      <p>
        To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the App or any content therein. This includes, but is not limited to, loss of data, profits, or business opportunities.
      </p>

      <h3>7. Termination</h3>
      <p>
        We reserve the right to suspend or terminate your account and access to the App at our sole discretion, without prior notice or liability, for any reason including, but not limited to, violation of these Terms.
      </p>

      <h3>8. Modifications to the Terms</h3>
      <p>
        We may update or modify these Terms from time to time. Your continued use of the App after such modifications constitutes your acceptance of the revised Terms.
      </p>

      <h3>9. Governing Law and Dispute Resolution</h3>
      <p>
        These Terms are governed by and construed in accordance with the laws of UAE. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in UAE.
      </p>

      <h3>10. Contact Us</h3>
      <p>
        If you have any questions, concerns, or feedback regarding these Terms, please contact us at <a href="mailto:info.LinkGram@gmail.com">info.LinkGram@gmail.com</a>.
      </p>

      <p>
        Thank you for using LinkGram. We hope you enjoy your experience on our platform.
      </p>
    </div>
  );
};

export default Terms;
