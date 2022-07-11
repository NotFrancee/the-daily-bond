import React from 'react';

import useLeadMagnet from '../../hooks/useLeadMagnet';
import Banner from './Banner';

interface Props {
  title: string;
  description: string;
  contentUpgrade?: string;
}

const LeadMagnet = ({ title, description, contentUpgrade }: Props) => {
  const { form } = useLeadMagnet(contentUpgrade);

  return (
    <Banner title={title} description={description}>
      {form}
    </Banner>
  );
};

export default LeadMagnet;
