// gatsby-ssr.js
import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

// const ORIGIN = process.env.ORIGIN;
// const GATSBY_GA_MEASUREMENT_ID = process.env.GATSBY_GA_MEASUREMENT_ID;

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test')
    return null;

  setHeadComponents([
    <Partytown
      key="partytown"
      forward={['dataLayer.push', '__tag_assistant_forwarder']}
      // @ts-ignore
      // resolveUrl={(url) => {
      //   if (
      //     url.host === 'www.googletagmanager.com' &&
      //     url.pathname.startsWith('/debug')
      //   ) {
      //     return `/proxy?forward=` + encodeURIComponent(url.href);
      //   }

      //   return url;
      // }}
    />,
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
    //     <script
    //       key={'debug'}
    //       type="text/javascript"
    //       dangerouslySetInnerHTML={{
    //         __html: `const debug = true;
    // const gtmDebugLog = (msg, data) => {
    //   if (debug) {
    //     console.debug(
    //       \`%cGTM Main%c\${msg}\`,
    //       \`background: #c47ed1; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;margin-right:5px\`,
    //       \`background: #999999; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;\`,
    //       data && data.length ? Array.from(data) : data
    //     )
    //   }
    // }

    // __partytown_gtm_debug = {
    //   // Used to populate dataLayer back into main thread
    //   dataLayerPush: function() {
    //     [].push.apply(dataLayer, arguments)
    //   },
    //   // Called when receiver has been set inside partytown, calls __TAG_ASSISTANT_API.setReceiver
    //   activate: function () {
    //     gtmDebugLog('activate')
    //     window.__TAG_ASSISTANT_API.setReceiver(function() {
    //       gtmDebugLog('send data', arguments)
    //       window.__tag_assistant_forwarder.apply(null, arguments);
    //     })
    //   },
    //   // Forwards calls from bootstrap
    //   sendMessage: function() {
    //     gtmDebugLog('send message', arguments)
    //     window.__TAG_ASSISTANT_API.sendMessage.apply(window.__TAG_ASSISTANT_API, arguments)
    //   },
    //   // Forwards calls from bootstrap
    //   disconnect: function() {
    //     gtmDebugLog('disconnect', arguments)
    //     window.__TAG_ASSISTANT_API.disconnect.apply(window.__TAG_ASSISTANT_API, arguments)
    //   },
    // }`,
    //       }}
    //     />,
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
