"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, Shield, PenLine } from "lucide-react";
import { Container, Section } from "@/components/layout/container";

const expertise = [
  {
    icon: Code2,
    title: "Development",
    description: "Full-stack engineering with modern frameworks. Building scalable applications from concept to deployment.",
    color: "#828475",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights through visualization, modeling, and statistical analysis.",
    color: "#6E7066",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security research, penetration testing, and building robust defenses for modern applications.",
    color: "#4A7C59",
  },
  {
    icon: PenLine,
    title: "Writing",
    description: "Technical writing, knowledge sharing, and making complex concepts accessible through clear communication.",
    color: "#C45D5D",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export function ExpertiseSection() {
  return (
    <Section background="surface">
      <Container>
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-3">
            What I Do
          </p>
          <h2 className="display text-text-primary">Areas of Expertise</h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {expertise.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group bg-bg-primary rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow cursor-default"
            >
              <div
                className="w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
