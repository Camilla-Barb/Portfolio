"use client";

// import { useTranslation } from "react-i18next";

export default function SkillsSection() {
  //   const { t } = useTranslation();
  return (
    <section
      className="skills-section text-center mb-20 pl-4 pr-4 bg-yellow-900/10"
      id="skills"
    >
      <h2 className="text-2xl font-bold pb-20 pt-10">How I Build the Web</h2>
      <div className="md:grid md:grid-cols-3 gap-10">
        <div className="skill-paragraph frontend">
          <h3 className="font-bold">Frontend Development</h3>
          <p>React.js / Next.js / ECMAScript / Typescript</p>
          <p className="bg-yellow-900/10 px-3 py-1 rounded shadow-lg shadow-yellow-900/20">
            HTML, CSS (Sass), Bootstrap, Tailwind CSS
          </p>
          <p> ISML, XML</p>
          <p>Node.js, Webpack</p>
        </div>

        <div className="skill-paragraph ecommerce">
          <h3 className="font-bold">E-Commerce & Platforms</h3>
          <p>Salesforce Commerce Cloud (SFCC)</p>
          <p>EVA (OMS)</p>
          <p>Contentful (CMS)</p>
        </div>

        <div className="skill-paragraph deployment">
          <h3 className="font-bold">Tools & Deployment</h3>
          <p> Vercel (deployment)</p>
          <p>Bitbucket, GitHub (version control)</p>
          <p>Jira (task management)</p>
          <p>Visual Studio Code (IDE)</p>
        </div>

        <div className="skill-paragraph design">
          <h3 className="font-bold">Design & Prototyping</h3>
          <p>Figma</p>
          <p>Adobe Illustrator</p>
        </div>

        <div className="skill-paragraph a11y">
          <h3 className="font-bold">Accessibility & Optimization</h3>
          <p>Website accessibility (WCAG 2.2)</p>
          <p>Performance optimization & testing</p>
        </div>

        <div className="skill-paragraph analytics">
          <h3 className="font-bold">Analytics & Tracking</h3>
          <p>Google Analytics</p>
          <p>Google Analytics Measurement Protocol</p>
        </div>
      </div>
    </section>
  );
}
