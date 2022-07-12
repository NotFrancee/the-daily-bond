// gatsby-ssr.js
import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

// const ORIGIN = process.env.ORIGIN;
// const GATSBY_GA_MEASUREMENT_ID = process.env.GATSBY_GA_MEASUREMENT_ID;

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test')
    return null;

  setHeadComponents([
    <Partytown key="partytown" forward={['dataLayer.push']} />,
    <script
      key="gtm"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKPZKVX');`,
      }}
    />,
  ]);

  setPreBodyComponents([
    <noscript
      key={'gtm'}
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKPZKVX"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />,
  ]);
};
