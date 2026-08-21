import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  icon?: LucideIcon;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-ink-900 text-ink-50 hover:bg-ink-800 border border-ink-900',
  secondary:
    'bg-transparent text-ink-900 hover:bg-ink-100 border border-ink-300',
  ghost:
    'bg-transparent text-ink-500 hover:text-ink-900 border border-transparent',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'secondary',
  icon: Icon = ArrowUpRight,
  className = '',
}: ButtonProps) {
  const classes = `group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && (
        <Icon
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
