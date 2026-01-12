"use client";

import {
  FiGlobe,
  FiTrendingUp,
  FiShoppingCart,
  FiSmartphone,
  FiBarChart2,
  FiTool,
  FiUsers,
  FiAward,
  FiClock,
  FiHeart,
  FiSearch,
  FiPenTool,
  FiCode,
  FiMessageSquare,
  FiMail,
  FiPhone,
  FiMapPin,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiMessageCircle,
  FiGithub,
  FiEye,
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
  FiCheckCircle,
  FiFilter,
  FiSend,
  FiCheck,
} from "react-icons/fi";

const iconComponents = {
  FiGlobe,
  FiTrendingUp,
  FiShoppingCart,
  FiSmartphone,
  FiBarChart2,
  FiTool,
  FiUsers,
  FiAward,
  FiClock,
  FiHeart,
  FiSearch,
  FiPenTool,
  FiCode,
  FiMessageSquare,
  FiMail,
  FiPhone,
  FiMapPin,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiMessageCircle,
  FiExternalLink,
  FiGithub,
  FiEye,
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
  FiCheckCircle,
  FiFilter,
  FiSend,
  FiCheck,
};

export type IconName = keyof typeof iconComponents;

interface IconResolverProps {
  name: IconName;
  className?: string;
  size?: number;
}

export default function IconResolver({
  name,
  className = "",
  size,
}: IconResolverProps) {
  const IconComponent = iconComponents[name] || FiGlobe;

  if (size) {
    return <IconComponent className={className} size={size} />;
  }

  return <IconComponent className={className} />;
}
