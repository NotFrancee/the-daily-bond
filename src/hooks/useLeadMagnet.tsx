import addToMailchimp, { MailchimpResponse } from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';
import LeadMagnetForm from '../components/newsletter/LeadMagnetForm';

/**
 * Represents a book.
 * @constructor
 * @param {string} contentUpgradeUrl - The URL of the Content Upgrade
 */
function useLeadMagnet(contentUpgradeUrl?: string) {
  console.log('HOOK CALLED');

  const [email, setEmail] = useState('');
  const [response, setResponse] = useState<MailchimpResponse | null>(null);
  const [downloaded, setDownloaded] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const resetResponse = () => {
    setTimeout(() => {
      setResponse(null);
    }, 3000);
  };

  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = async (
    event,
  ) => {
    event.preventDefault();
    if (!email) {
      setResponse({ result: 'error', msg: 'Compila la Email!' });
      return resetResponse();
    }
    if (downloaded) {
      setResponse({ result: 'error', msg: 'Lo hai già scaricato!' });
      return resetResponse();
    }

    try {
      const response = await addToMailchimp(email);
      setResponse(response);

      if (response.result === 'success' && contentUpgradeUrl) {
        // give the content upgrade in a new page
        window.open(contentUpgradeUrl);
        setDownloaded(true);
      }
    } catch {
      setResponse({ result: 'error', msg: 'Qualcosa è andato storto' });
      console.error('Something went wrong');
    }

    resetResponse();
  };

  return {
    form: (
      <LeadMagnetForm
        email={email}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        response={response}
      />
    ),
  };
}

export default useLeadMagnet;
