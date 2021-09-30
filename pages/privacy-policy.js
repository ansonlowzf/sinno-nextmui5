import { Container, Typography } from "@mui/material";
import { Hero, MetaSEO } from "../components";
import { Heading2, Heading3, SectionWrapper } from "../element";

const Privacy = () => {
  return (
    <>
      <MetaSEO
        pageTitle="Privacy Policy"
        pageDesc="This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
        pagePath="privacy-policy"
        metaImg="/privacy-policy.jpg"
      />
      <SectionWrapper>
        <Hero
          imgSrc="/privacy-policy.jpg"
          imgAlt="privacy policy"
          title="Privacy Policy"
        />
      </SectionWrapper>
      <SectionWrapper>
        <Container maxWidth="sm">
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            INTRODUCTION
          </Typography>
          <Typography
            paragraph
          >{`Stone Innovations Enterprise (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [https://www.stoneinnovations.com.my], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). `}</Typography>
          <Typography paragraph>
            {`  Please read this privacy policy carefully. If you disagree with the
            terms of this privacy policy, please do not access the Site.`}
          </Typography>
          <Typography paragraph>
            {`We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the revised Privacy Policy on the Site. You waive the right to receive specific notice of each such change or modification.`}
          </Typography>
          <Typography paragraph>
            {`You are encouraged to review this Privacy Policy to stay informed of updates periodically. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.`}
          </Typography>
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            COLLECTION OF INFORMATION
          </Typography>
          <Typography paragraph>
            {`We may collect information about you in a variety of ways. The information we may collect on the Site includes:`}
          </Typography>
          <Typography component="h3" variant="h4" color="primary" gutterBottom>
            Personal Data
          </Typography>
          <Typography paragraph>
            {`Personally identifiable information, such as your name and email address when you subscribe to our newsletter or when you choose to participate in various activities related to the Site, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain Site features.`}
          </Typography>
          <Typography component="h3" variant="h4" color="primary" gutterBottom>
            Derivative Data
          </Typography>
          <Typography paragraph>
            {`The information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.`}
          </Typography>
          <Typography component="h3" variant="h4" color="primary" gutterBottom>
            Mobile Device Data
          </Typography>
          <Typography paragraph>
            {`Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.`}
          </Typography>
          <Typography component="h3" variant="h4" color="primary" gutterBottom>
            Third-Party Data
          </Typography>
          <Typography paragraph>
            {`Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Site permission to access this information.`}
          </Typography>
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            USE OF INFORMATION
          </Typography>
          <Typography paragraph>
            {`Having accurate information about you permits us to provide a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:`}
          </Typography>
          <Typography
            component="ul"
            paragraph
            sx={{ listStylePosition: "inside" }}
          >
            <li>Assist law enforcement and respond to subpoena.</li>
            <li>
              Compile anonymous statistical data and analysis for use
              internally.
            </li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Site.
            </li>
            <li>
              Request feedback and contact you about your use of the Site.
            </li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
          </Typography>
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            DISCLOSURE OF INFORMATION
          </Typography>
          <Typography paragraph>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </Typography>
          <Typography component="h3" variant="h4" color="primary" gutterBottom>
            By Law or to Protect Rights
          </Typography>
          <Typography paragraph>
            Suppose we believe the release of information about you is necessary
            to respond to the legal process, investigate or remedy potential
            violations of our policies, or protect the rights, property, and
            safety. In that case, we may share your information as permitted or
            required by any applicable law, rule, or regulation. This includes
            exchanging information with other entities for fraud protection and
            credit risk reduction.
          </Typography>
          <Typography component="h3" variant="h4" color="primary" gutterBottom>
            Third-Party Service Providers
          </Typography>
          <Typography paragraph>
            We may share your information with third parties that perform
            services for us or on our behalf, including payment processing, data
            analysis, email delivery, hosting services, customer service, and
            marketing assistance.
          </Typography>
          <Typography component="h3" variant="h4" color="primary" gutterBottom>
            Cookies and Web Beacons
          </Typography>
          <Typography paragraph>
            We may use cookies, web beacons, tracking pixels, and other tracking
            technologies to help customize the Site and improve your experience.
            When you access the Site, your personal information is not collected
            through the use of tracking technology. Most browsers are set to
            accept cookies by default. You can remove or reject cookies, but be
            aware that such action could affect the availability and
            functionality of the Site. You may not decline web beacons. However,
            they can be rendered ineffective by declining all cookies or by
            modifying your web browser’s settings to notify you each time a
            cookie is tendered, permitting you to accept or decline cookies on
            an individual basis.
          </Typography>
          <Typography paragraph>
            We may use cookies, web beacons, tracking pixels, and other tracking
            technologies on the Site to help customize the Site and improve your
            experience. For more information on how we use cookies, please refer
            to our Cookie Policy posted on the Site, which is incorporated into
            this Privacy Policy. By using the Site, you agree to be bound by our
            Cookie Policy.
          </Typography>
          <Typography component="h3" variant="h4" color="primary" gutterBottom>
            Website Analytics
          </Typography>
          <Typography paragraph>
            We may also partner with selected third-party vendors - Google
            Analytics, to allow tracking technologies and remarketing services
            on the Site through the use of first-party cookies and third-party
            cookies, to, among other things, analyze and track users’ use of the
            Site, determine the popularity of certain content and better
            understand online activity.
          </Typography>
          <Typography paragraph>
            By accessing the Site, you consent to collecting and using your
            information by these third-party vendors. You are encouraged to
            review their privacy policy and contact them directly for responses
            to your questions.
          </Typography>
          <Typography paragraph>
            We do not transfer personal data to these third-party vendors.
            However, suppose you do not want any information to be collected and
            used by tracking technologies. In that case, you can visit the
            third-party vendor or the Network Advertising Initiative Opt-Out
            Tool or Digital Advertising Alliance Opt-Out Tool.
          </Typography>
          <Typography paragraph>
            You should be aware that getting a new computer, installing a new
            browser, upgrading an existing browser, or erasing or otherwise
            altering your browser’s cookies files may also clear certain opt-out
            cookies, plug-ins, or settings.
          </Typography>
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            THIRD-PARTY WEBSITES
          </Typography>
          <Typography paragraph>
            The Site may contain links to third-party websites and applications
            of interest, including advertisements and external services, that
            are not affiliated with us. Once you have used these links to leave
            the Site, any information you provide to these third parties is not
            covered by this Privacy Policy. We cannot guarantee the safety and
            privacy of your information. Before visiting and providing any
            information to any third-party websites, you should inform yourself
            of the privacy policies and practices (if any) of the third-party
            responsible for that website and should take those steps necessary
            to, in your discretion, protect the privacy of your information. We
            are not responsible for the content or privacy and security
            practices and policies of any third parties, including other sites,
            services or applications that may be linked to or from the Site.
          </Typography>
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            SECURITY OF YOUR INFORMATION
          </Typography>
          <Typography paragraph>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </Typography>
          <Typography paragraph>
            Any information disclosed online is vulnerable to interception and
            misuse by unauthorized parties. Therefore, we cannot guarantee
            complete security if you provide personal information.
          </Typography>
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            POLICY FOR CHILDREN
          </Typography>
          <Typography paragraph>
            We do not knowingly solicit information from or market to children
            under the age of 13. If you become aware of any data we have
            collected from children under age 13, please contact us using the
            contact information provided below.
          </Typography>
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            CONTROLS FOR DO-NOT-TRACK FEATURES
          </Typography>
          <Typography paragraph>
            {`Most web browsers and some mobile operating systems include a
            Do-Not-Track (“DNT”) feature or setting you can activate to signal
            your privacy preference not to have data about your online browsing
            activities monitored and collected. No uniform technology standard
            for recognizing and implementing DNT signals has been finalized. As
            such, we do not currently respond to DNT browser signals or any
            other mechanism that automatically communicates your choice not to
            be tracked online. If a standard for online tracking is adopted that
            we must follow in the future, we will inform you about that practise
            in a revised version of this Privacy Policy. Most web browsers and
            some mobile operating systems include a Do-Not-Track (“DNT”) feature
            or setting you can activate to signal your privacy preference not to
            have data about your online browsing activities monitored and
            collected. If you set the DNT signal on your browser, we will
            respond to such DNT browser signals.`}
          </Typography>
          <Typography component="h2" variant="h3" color="primary" gutterBottom>
            CONTACT US
          </Typography>
          <Typography
            paragraph
          >{`If you have questions or comments about this Privacy Policy, don't hesitate to get in touch with us at:`}</Typography>
          <Typography fontWeight="bold">
            contact@stoneinnovations.com.my
          </Typography>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Privacy;
