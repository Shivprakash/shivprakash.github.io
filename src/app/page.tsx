import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { SkillsEntry } from "@/components/skills-entry";
import { skillsData } from "@/data/skills";
import { ServicesEntry } from "@/components/services-entry";
import { servicesData } from "@/data/services";
import { sectionOrder, Section } from "@/data/section-order";
import { Metadata } from "next";
import { customMetadata } from "@/data/title-description";

export const metadata: Metadata = {
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-xl mx-auto px-10 py-28">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-10 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-14 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-2xl leading-relaxed text-foreground [&_a]:underline [&_a]:text-accent [&_a:hover]:text-accent-hover"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.Skills:
                  return (
                    skillsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-heading font-bold text-lg text-foreground mb-14 tracking-wide uppercase">
                          Skills
                        </h2>
                        <div className="space-y-8">
                          {skillsData.map((skillCategory, index) => (
                            <div key={index}>
                              <SkillsEntry skillCategory={skillCategory} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Services:
                  return (
                    servicesData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-heading font-bold text-lg text-foreground mb-14 tracking-wide uppercase">
                          What I Can Help With
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                          {servicesData.map((serviceCategory, index) => (
                            <ServicesEntry key={index} serviceCategory={serviceCategory} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-heading font-bold text-lg text-foreground mb-14 tracking-wide uppercase">
                          News
                        </h2>
                        <div className="space-y-12">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-heading font-bold text-lg text-foreground mb-14 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-heading font-bold text-lg text-foreground mb-14 tracking-wide uppercase">
                          Patents
                        </h2>
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-divider-soft my-10" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-heading font-bold text-lg text-foreground mb-14 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-heading font-bold text-lg text-foreground mb-14 tracking-wide uppercase">
                          Portfolio
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
