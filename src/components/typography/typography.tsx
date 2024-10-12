import React from "react";
import { cn } from "@/lib/utils";

/**
 * Typography Components
 *
 * This file contains a set of typography components that provide consistent
 * text styling across the application. Each component applies specific
 * Tailwind CSS classes to achieve the desired typography.
 */

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * H1 Component
 *
 * Renders an h1 heading with large, bold text.
 *
 * @component
 * @example
 * <H1>Main Heading</H1>
 */
export const H1: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
      {children}
    </h1>
  );
};

/**
 * H2 Component
 *
 * Renders an h2 heading with medium-large, bold text.
 *
 * @component
 * @example
 * <H2>Subheading</H2>
 */
export const H2: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

/**
 * H3 Component
 *
 * Renders an h3 heading with medium, bold text.
 *
 * @component
 * @example
 * <H3>Section Heading</H3>
 */
export const H3: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  );
};

/**
 * H4 Component
 *
 * Renders an h4 heading with small-medium, bold text.
 *
 * @component
 * @example
 * <H4>Subsection Heading</H4>
 */
export const H4: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  );
};

/**
 * P Component
 *
 * Renders a paragraph with standard body text styling.
 *
 * @component
 * @example
 * <P>This is a paragraph of text.</P>
 */
export const P: React.FC<TypographyProps> = ({ children, className }) => {
  return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>;
};

// Additional components based on the documentation

/**
 * Blockquote Component
 *
 * Renders a blockquote with italic text and a left border.
 *
 * @component
 * @example
 * <Blockquote>This is a quoted text.</Blockquote>
 */
export const Blockquote: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>{children}</blockquote>
  );
};

/**
 * InlineCode Component
 *
 * Renders inline code with a monospace font and background.
 *
 * @component
 * @example
 * <P>This is a sentence with <InlineCode>inline code</InlineCode>.</P>
 */
export const InlineCode: React.FC<TypographyProps> = ({ children, className }) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
};

/**
 * Lead Component
 *
 * Renders lead text, typically used for introductory paragraphs.
 *
 * @component
 * @example
 * <Lead>This is a lead paragraph that introduces the main content.</Lead>
 */
export const Lead: React.FC<TypographyProps> = ({ children, className }) => {
  return <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>;
};

/**
 * Large Component
 *
 * Renders large text, typically used for emphasis.
 *
 * @component
 * @example
 * <Large>This text is larger than normal body text.</Large>
 */
export const Large: React.FC<TypographyProps> = ({ children, className }) => {
  return <div className={cn("text-lg font-semibold", className)}>{children}</div>;
};

/**
 * Small Component
 *
 * Renders small text, typically used for captions or footnotes.
 *
 * @component
 * @example
 * <Small>This is small print or a caption.</Small>
 */
export const Small: React.FC<TypographyProps> = ({ children, className }) => {
  return <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>;
};

export const Muted: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
};
