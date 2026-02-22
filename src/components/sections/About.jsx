
import { Download, Code2, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiAmazonwebservices,
  SiPython,
  SiPostgresql,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const About = () => {
  // Skills
  const skills = [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python" , icon: SiPython },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "git", icon: SiGit },
    { name: "Figma", icon: SiFigma },
  ];

  return <section id="about" className="relative py-20 overflow-hidden">
            <RadialGradientBackground variant="about" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Content */}
                    <div className="relative flex flex-col gap-12">
                        <div className="absolute -inset-6 -z-10 rounded-3xl bg-linear-to-b from-black/70 via-black/45 to-black/20 backdrop-blur-[1px] pointer-events-none" />
                        <div className="flex flex-col gap-8">
                            <FadeIn delay={60}>
                                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                                    <Code2 className="w-4 h-4 text-primary" />
                                    <span className="text-sm text-primary font-medium">
                                        Full-Stack Developer
                                    </span>
                                    <Sparkles className="w-4 h-4 text-primary" />
                                </div>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <h2 className="text-4xl lg:text-5xl font-medium text-white [text-shadow:0_6px_20px_rgba(0,0,0,0.78),0_2px_6px_rgba(0,0,0,0.85)] leading-tight">
                                    Crafting Digital Experiences That Matter
                                </h2>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <div className="flex flex-col gap-4">
                                    {PERSONAL_INFO.bio.map((paragraph, index) => (
                                        <p key={index} className="text-base text-white/95 [text-shadow:0_2px_10px_rgba(0,0,0,0.82)] font-medium leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn delay={300}>
                            <div className="grid grid-cols-3 gap-8">
                                {ABOUT_STATS.map((stat, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                                        <div className="text-3xl font-normal text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.82)] mb-2 font-mono">
                                            {stat.value}
                                        </div>
                                        <p className="text-sm text-white/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.75)] leading-snug">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <button
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                                Download Resume
                            </button>
                        </FadeIn>
                    </div>

                    {/* Right Column - Info Grid */}
                    <FadeIn delay={200}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative overflow-hidden bg-black/90 bg-linear-to-b from-white/[0.06] via-black/92 to-black/98 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(255,255,255,0.03),0_20px_36px_rgba(0,0,0,0.55)] rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <Code2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                Specialized in building scalable web applications with modern technologies and best practices.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/6 group-hover:to-primary/6 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative overflow-hidden bg-black/90 bg-linear-to-b from-white/[0.06] via-black/92 to-black/98 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(255,255,255,0.03),0_20px_36px_rgba(0,0,0,0.55)] rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">Clean Code</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Writing maintainable, well-documented code that scales.
                                    </p>
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/6 group-hover:to-primary/6 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative overflow-hidden bg-black/90 bg-linear-to-b from-white/[0.06] via-black/92 to-black/98 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(255,255,255,0.03),0_20px_36px_rgba(0,0,0,0.55)] rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                                        <Download className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">Performance</h3>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Optimizing for speed and efficiency in every project.
                                    </p>
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/6 group-hover:to-primary/6 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </div>
                            </div>

                            <div className="col-span-2 relative group">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                <div className="relative overflow-hidden bg-black/90 bg-linear-to-b from-white/[0.06] via-black/92 to-black/98 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(255,255,255,0.03),0_20px_36px_rgba(0,0,0,0.55)] rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                    <div className="grid grid-cols-3 gap-6 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">100%</div>
                                            <div className="text-xs text-white/60">Client Satisfaction</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                                            <div className="text-xs text-white/60">Support Available</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary mb-1">Fast</div>
                                            <div className="text-xs text-white/60">Delivery Time</div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/6 group-hover:to-primary/6 rounded-2xl transition-all duration-300 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Skills Grid Section */}
                <FadeIn delay={500}>
                    <div className="flex flex-col items-center gap-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-normal text-white [text-shadow:0_4px_14px_rgba(0,0,0,0.72)] mb-2">
                                Tech Stack & Expertise
                            </h3>
                            <p className="text-sm text-white/86 [text-shadow:0_1px_6px_rgba(0,0,0,0.72)]">
                                Technologies I work with to build amazing products
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-black/90 bg-linear-to-b from-white/[0.06] via-black/92 to-black/98 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(255,255,255,0.03),0_20px_36px_rgba(0,0,0,0.55)] hover:border-primary/50 hover:brightness-110 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
                                >
                                    <skill.icon className="text-3xl text-primary" />
                                    <div className="text-sm text-white/80 font-medium text-center">
                                        {skill.name}
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
};

export default About;
