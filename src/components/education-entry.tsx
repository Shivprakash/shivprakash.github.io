import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
    return (
        <div>
            <div className="grid grid-cols-1 gap-x-2.5 mb-2.5"> {/* Changed to grid-cols-1 */}
                {/* Removed year element */}
                <div> {/* Removed col-span-3 */}
                    <h3 className="text-lg mb-1 font-heading font-bold">{education.institution}</h3>
                    <p className="text-base text-muted">{education.degree}</p>
                    {education.advisor && (
                        <p className="text-base text-hint mt-2.5 font-serif italic">
                            Advisor: {education.advisor}
                        </p>
                    )}
                    {education.thesis && (
                        <p className="text-base text-hint mt-2.5 font-serif italic">
                            Thesis:{" "}
                            {education.thesisUrl ? (
                                <a
                                    href={education.thesisUrl}
                                    className="hover:text-accent transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {education.thesis}
                                </a>
                            ) : (
                                education.thesis
                            )}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}