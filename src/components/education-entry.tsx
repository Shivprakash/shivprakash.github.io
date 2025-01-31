import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
    return (
        <div>
            <div className="grid grid-cols-1 gap-x-2 mb-2"> {/* Changed to grid-cols-1 */}
                {/* Removed year element */}
                <div> {/* Removed col-span-3 */}
                    <h3 className="text-base mb-1 font-serif">{education.institution}</h3>
                    <p className="text-sm text-zinc-600">{education.degree}</p>
                    {education.advisor && (
                        <p className="text-sm text-zinc-500 mt-2 italic">
                            Advisor: {education.advisor}
                        </p>
                    )}
                    {education.thesis && (
                        <p className="text-sm text-zinc-500 mt-2 italic">
                            Thesis:{" "}
                            {education.thesisUrl ? (
                                <a
                                    href={education.thesisUrl}
                                    className="hover:underline"
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