languageSecurity = {
    fileFor: 'security',
    dialogHeadline: 'Security',
    dialogText: `
                <div class="wrapper layout vertical justified">
                    <p>Record Evolution users have entrusted Record Evolution with their data, and we make it a priority to take our users’ security and privacy concerns seriously. We strive to ensure that user data is handled securely. Record Evolution uses some of the most advanced technologies for internet security that is commercially available today. This Security Statement is aimed at being transparent about our security infrastructure and practices, to help reassure you that your data is appropriately protected. Visit our privacy policy for more information on data handling. Record Evolution is a product built on a Google Cloud Platform. Therefore, most of the security measures are provided by Google Cloud Platform which implements comprehensive Google Security model. This security statement outlines the main security measures taken to protect your data. For more detailed information visit <a rel="noopener" target="_blank" href="https://cloud.google.com/security/" .>https://cloud.google.com/security/</a></p>
                    <h3>A. User Security</h3>
                    <h4> 1. Authentication:</h4>
                    <p>User data on our database is logically segregated by account-based access rules. User accounts have unique usernames and passwords that must be entered each time a user logs on. Record Evolution issues a session cookie only to record encrypted authentication information for the duration of a specific session. The session cookie does not include the password of the user.</p>
                    <h4> 2. Passwords:</h4>
                    <p>User application passwords have minimum complexity requirements. Passwords are salted and hashed.</p>
                    <h4> 3. Data Encryption:</h4>
                    <p>Certain sensitive user data, such as account passwords, are stored in encrypted format. Credit card details are not stored in our database.</p>
                    <h4> 4. Privacy:</h4>
                    <p> We have a comprehensive privacy policy that provides a very transparent view of how we handle your data, including how we use your data, who we share it with, and how we retain, delete and block it.</p>
                    <h4> 5. Data Residency:</h4>
                    <p>All Record Evolution user data is stored on servers located in Germany.</p>
                    <h3>B. Availability</h3>
                    <h4>1. Connectivity:</h4>
                    <p>We use fully redundant IP network connections with multiple independent connections to a range of Tier 1 Internet access providers.
                        <h4>2. Power:</h4>
                        <p>Servers have redundant internal and external power supplies, as well as environmental controls. Data centers have backup power supplies, and are able to draw power from the multiple substations on the grid, several diesel generators, and backup batteries.</p>
                        <h4>3. Uptime:</h4>
                        <p>Continuous uptime monitoring, with immediate escalation to Record Evolution staff for any downtime.</p>
                        <h4>4. Failover:</h4>
                        <p>All our systems are tolerant to single node failures within failover times of less than 3 seconds.</p>
                        <h4>5. Data resilience:</h4>
                        <p>There are three replicas of all user data.</p>
                        <h3>C. Network Security</h3>
                        <h4>1. Testing:</h4>
                        <p>System functionality and design changes are verified in an isolated test “sandbox” environment and subject to functional and security testing prior to deployment to active production systems.</p>
                        <h4>2. Firewalls:</h4>
                        <p>Firewalls restrict access to all ports except 80 (http), 443 (https).</p>
                        <h4>3. Access Control:</h4>
                        <p>Role-based access is enforced for systems management by authorized engineering staff.</p>
                        <h4>4. Encryption in Transit:</h4>
                        <p>Communications with the Record Evolution website are sent over TLS connections, which protects communications by using both server authentication and data encryption. This ensures that user data in transit is safe, secure, and available only to intended recipients. Our application endpoints are TLS only and score an “A” rating on SSL Labs‘ tests. We also employ Forward Secrecy and only support strong ciphers for added privacy and security.</p>
                        <h3>C. Vulnerability Management</h3>
                        <h4>Patching:</h4>
                        <p>Latest security patches are applied to all operating systems, applications, and network infrastructure to mitigate exposure to vulnerabilities.</p>
                        <h3>D. Organizational & Administrative Security</h3>
                        <h4>1. Employee Screening:</h4>
                        <p>We perform background screening on all employees in compliance within local laws. No Record Evolution employees ever access private accounts unless required to for support reasons. Support staff may sign into your account to access settings related to your support issue. In rare cases staff may need to make a copy of your data pod, this will only be done with your consent. When working a support issue we do our best to respect your privacy as much as possible, we only access the data and settings needed to resolve your issue. All copied data pods are deleted as soon as the support issue has been resolved.</p>
                        <h4>2. Training:</h4>
                        <p>We provide security and technology use training for employees.</p>
                        <h4>3. Service Providers: :</h4>
                        <p>We screen our service providers and bind them under contract to appropriate confidentiality and security obligations.</p>
                        <h3>E. Software Development Practices</h3>
                        <h4>1. Coding Practices:</h4>
                        <p>Our engineers use best practices and industry-standard secure coding guidelines.</p>
                        <h4>2. Deployment:</h4>
                        <p>We deploy code regularly giving us the ability to react quickly in the event of a bug or vulnerability being discovered within our code.</p>
                        <h3>F. Compliance and Certifications</h3>
                        <p>All payment details are transmitted over a secure connection (Secure Socket Layer-SSL) and stored in compliance with PCI DSS (Payment Card Industry Data Security Standards) 3.1.</p>
                        <h3>G. Handling of Security Breaches</h3>
                        <p>Despite best efforts, no method of transmission over the Internet and no method of electronic storage is perfectly secure. We cannot guarantee absolute security. However, if Record Evolution learns of a security breach, we will notify affected users so that they can take appropriate protective steps. Our breach notification procedures are consistent with industry rules or standards that we adhere to. Notification procedures include providing email notices or posting a notice on our website if a breach occurs.</p>
                        <h3>H. Your Responsibilities</h3>
                        <p>Keeping your data secure also depends on you ensuring that you maintain the security of your account by using sufficiently complicated passwords and storing them safely. You should also ensure that you have sufficient security on your own systems, to keep any user data you download to your own computer away from prying eyes.</p>
                        <h3>I. Credit card safety</h3>
                        <p>When you sign up for a paid account on Record Evolution, we do not store any of your card information on our servers. It's handed off to Stripe Payment Solutions, a company dedicated to storing your sensitive data on PCI-Compliant servers.</p>
                        <p>Contact Us</p>
                        <p>You have a question, concern, or comment about the Record Evolution security? Please contact us via email
                            <span class="email"><a href="mailto:contact@record-evolution.de?subject=Reaching out to RECORD.evolution&body=Hello">contact@record-evolution.de</a></span>
                        </p>
                    </p>
                </div>`
}