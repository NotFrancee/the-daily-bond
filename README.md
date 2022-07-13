<p align="center">
  <a href="https://www.thedailybond.com">
    <img alt="The Daily Bond Logo" src="https://ik.imagekit.io/astrum/TDB_Logo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657536263315" width="60" />
  </a>
</p>
<h1 align="center">
  The Daily Bond - Gatsby Responsive Website
</h1>

## 💻 Description

### The Website

- This is the website for my personal blog, **The Daily Bond**. It is a blog about _Personal Finance_ and _Productivity_ in Italian.
- The website has been coded _mobile-first_, but is responsive for various screen sizes as well
- It is optimized for **SEO** as well:
  - Support for **structured content**
  - **meta tags** through `react-helmet`
  - **Sitemap** generated by `gatsby-plugin-sitemap`
  - **Image Lazy Loading** thanks to `gatsby-plugin-image`
  - Custom **robots.txt** config

### Styling - Chakra-UI

- The website is styled with **Chakra-UI**
- The Chakra-UI default theme is enhanced by editing various components, adding new variants (e.g. the buttons) and creating new Components from scratch (e.g. the ResponsiveGrid and ResponsiveFlex)

### CDN - Contentful

- I used Contentful as the CDN for this project.
- The gatsby plugin for contentful pulls data from Contentful, which I then request through the Gatsby GraphQL API.
- After that, the script in `gatsby-node.ts` creates a page for every article dividing them by category.

### Lead Magnets - Mailchimp

- Thanks to `gatsby-plugin-mailchimp`, I can collect visitors' emails and use them for marketing purposes, without the need for a backend to handle user emails
- The lead magnets can be Content Upgrades (the user can download a file after providing the email) or simple Newsletter Banners (the user gets added to a mailing list)
- The different copy versions for headings and descriptions are handled through Contentful and are later rendered in template components.

### Analytics - Google Analytics & Partytown

- I track user behaviour and article performance through **Google Analytics**
- Through the use of **Partytown**, the script that enables tracking is handled by another web worker, thus improving drastically the performance of the website

### Hosting - Gatsby Cloud & AWS

- I hosted the website with **Gatsby Cloud**
- The website is available on a custom domain (_thedailybond.com_), that is registered and hosted on **AWS**.

## 🚀 Other

1.  **Useful Commands**

    - Start in Development Mode: `npm start`
    - Create an optimized bundle for Production: `npm run build`
    - Start a production server: `npm run serve`
    - Lint the code: `npm run lint`
    - Format the code: `npm run format`

    Edit `src/pages/index.tsx` to see your site update in real-time!
