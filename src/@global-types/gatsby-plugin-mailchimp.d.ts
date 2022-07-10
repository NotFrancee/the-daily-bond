declare module "gatsby-plugin-mailchimp" {
  declare interface MailchimpResponse {
    res: "success" | "error";
    msg: string;
  }
  declare async function addToMailchimp(
    email: string,
    fields?: any,
    endpointOverride?: string
  ): Promise<MailchimpResponse>;

  export = addToMailchimp;
  export { MailchimpResponse };
}
