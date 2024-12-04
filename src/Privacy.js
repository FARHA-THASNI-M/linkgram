import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Privacy = () => {
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

      {/* Privacy Policy Content */}
      <h1>Privacy Policy </h1>
      <p><strong>Effective Date: 04/12/2024</strong></p>
      <p>
        Welcome to LinkGram ("the App," "we," "us," or "our"). This Privacy Policy is intended to inform you about how we collect, use, disclose, and protect your personal information when you use our social media application. By using the App, you agree to the practices described in this Privacy Policy.
      </p>

      <h3>1. Information We Collect</h3>
      <p><strong>1.1 Information You Provide</strong></p>
      <p>
        When you register an account or interact with the App, we may collect information that you provide directly, such as your name, username, email address, profile picture, and any content you choose to post, share, or upload.
      </p>
      <p><strong>1.2 Automatically Collected Information</strong></p>
      <p>
        We may collect certain information automatically when you use the App, including your IP address, device type, operating system, app version, and usage patterns. This information helps us improve the App's functionality and tailor your experience.
      </p>

      <h3>2. How We Use Your Information</h3>
      <p><strong>2.1 Providing and Improving the App</strong></p>
      <p>
        We use the information collected to operate, maintain, and enhance the App's features, functionalities, and user experience. This includes troubleshooting issues and optimizing performance.
      </p>
      <p><strong>2.2 Communication</strong></p>
      <p>
        We may use your email address to send you updates, notifications, and important information about the App. You can opt-out of these communications at any time.
      </p>
      <p><strong>2.3 Personalization</strong></p>
      <p>
        We use the information to personalize your experience within the App, including suggesting content, connections, and features that might interest you.
      </p>

      <h3>3. Sharing and Disclosure of Your Information</h3>
      <p><strong>3.1 Third Parties</strong></p>
      <p>
        We may share your information with third-party service providers who assist us in delivering and improving the App's services. These providers are bound by confidentiality agreements and are not permitted to use your information for any other purpose.
      </p>
      <p><strong>3.2 Legal Compliance</strong></p>
      <p>
        We may disclose your information if required by law, regulation, legal process, or governmental request. We will also do so to protect our rights, privacy, safety, or property, as well as that of our users.
      </p>
      <p><strong>3.3 Business Transfers</strong></p>
      <p>
        In the event of a merger, acquisition, sale, or transfer of assets, your information may be transferred to the acquiring entity as part of the transaction.
      </p>

      <h3>4. Your Choices</h3>
      <p><strong>4.1 Account Information</strong></p>
      <p>
        You can update or modify your account information at any time by accessing your account settings within the App.
      </p>
      <p><strong>4.2 Opting Out</strong></p>
      <p>
        You have the option to opt-out of receiving promotional emails from us by following the instructions provided in the emails. Please note that even if you opt-out, we may still send you non-promotional communications.
      </p>

      <h3>5. Data Security</h3>
      <p>
        We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h3>6. Children's Privacy</h3>
      <p>
        The App is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children. If you believe that we might have inadvertently collected personal information from a child, please contact us immediately.
      </p>

      <h3>7. Changes to this Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. The most current version will always be available on our website or within the App.
      </p>

      <h3>8. Contact Us</h3>
      <p>
        If you have any questions, concerns, or feedback regarding this Privacy Policy, please contact us at <a href="mailto:info.LinkGram@gmail.com">info.LinkGram@gmail.com</a>.
      </p>

      <p>
        By using the App, you consent to the terms outlined in this Privacy Policy. Thank you for trusting LinkGram with your information.
      </p>
    </div>
  );
};

export default Privacy;
