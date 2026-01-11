import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { CaseStudy, caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  if (!caseStudy) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <p className="text-white">Case study not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-full relative max-w-4xl mx-auto px-8 py-12"
    >
      {/* Back Link */}
      <motion.div variants={itemVariants} className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[#888] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">{caseStudy.title}</h1>
        <p className="text-[#888] text-lg mb-6">{caseStudy.subtitle}</p>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-[#1a1a1a]">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-40" />
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {caseStudy.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-[#888] border-[#333] bg-transparent"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* Problem */}
      <motion.section variants={itemVariants} className="mb-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Problem
            </h2>
            <p className="text-[#888] leading-relaxed">{caseStudy.problem}</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Approach */}
      <motion.section variants={itemVariants} className="mb-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              Approach
            </h2>
            <ul className="space-y-3">
              {caseStudy.approach.map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-[#888]">
                  <span className="text-[#1ED760] mt-0.5">{index + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Result */}
      <motion.section variants={itemVariants} className="mb-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm border-[#1ED760]/30">
          <CardContent className="p-6">
            <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1ED760]" />
              Result
            </h2>
            <p className="text-[#888] leading-relaxed">{caseStudy.result}</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Screenshots */}
      {caseStudy.screenshots.length > 0 && (
        <motion.section variants={itemVariants} className="mb-8">
          <h2 className="text-white text-xl font-semibold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 gap-4">
            {caseStudy.screenshots.map((screenshot, index) => (
              <div key={index} className="space-y-2">
                <div className="relative h-64 rounded-lg overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#666] text-sm text-center">
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* What I'd Improve */}
      <motion.section variants={itemVariants} className="mb-8">
        <Card className="bg-[#0a0a0a]/80 border-[#1a1a1a] backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-white text-xl font-semibold mb-4">
              What I'd Improve Next
            </h2>
            <ul className="space-y-2">
              {caseStudy.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start gap-3 text-[#888]">
                  <span className="text-[#1ED760]">→</span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      {/* Links */}
      <motion.section variants={itemVariants} className="mb-8">
        <div className="flex flex-wrap gap-4">
          {caseStudy.links.github && (
            <a
              href={caseStudy.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#333] text-white font-medium rounded-lg hover:border-[#1ED760] hover:bg-[#1ED760]/10 transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          )}
          {caseStudy.links.live && (
            <a
              href={caseStudy.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1ED760] text-black font-medium rounded-lg hover:bg-[#1ed760]/90 transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              View Live
            </a>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = caseStudies.map((study) => ({
    params: { slug: study.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const caseStudy = getCaseStudyBySlug(params?.slug as string);

  if (!caseStudy) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      caseStudy,
    },
  };
};

