import React from 'react';
import {
  SiPostgresql,
  SiPython,
  SiFigma,
  SiGithub,
  SiMetabase,
  SiGoogle,
  SiDbeaver
} from 'react-icons/si';
import {
  Database,
  FileSpreadsheet,
  BarChart3,
  PieChart,
  Layers,
  Workflow,
  GitMerge,
  Filter,
  CheckCircle2,
  Search,
  LayoutGrid,
  FileText,
  Boxes
} from 'lucide-react';

export default function ToolIcon({ name, className = 'w-4 h-4' }) {
  const normalized = name.toLowerCase().trim();

  // Official brand icons
  if (normalized.includes('postgresql')) {
    return <SiPostgresql className={`${className} text-[#4169E1]`} />;
  }
  if (normalized.includes('python')) {
    return <SiPython className={`${className} text-[#3776AB]`} />;
  }
  if (normalized.includes('figma')) {
    return <SiFigma className={`${className} text-[#F24E1E]`} />;
  }
  if (normalized.includes('github')) {
    return <SiGithub className={`${className} text-slate-900`} />;
  }
  if (normalized.includes('metabase')) {
    return <SiMetabase className={`${className} text-[#509EE3]`} />;
  }
  if (normalized.includes('dbeaver')) {
    return <SiDbeaver className={`${className} text-[#382923]`} />;
  }
  if (normalized.includes('looker') || normalized.includes('google')) {
    return <SiGoogle className={`${className} text-[#4285F4]`} />;
  }

  // Consistent, simple fallback icons for tools without official icon library entries
  if (normalized.includes('excel')) {
    return <FileSpreadsheet className={`${className} text-emerald-600`} />;
  }
  if (normalized.includes('power bi')) {
    return <BarChart3 className={`${className} text-amber-500`} />;
  }
  if (normalized.includes('tableau')) {
    return <PieChart className={`${className} text-blue-600`} />;
  }
  if (normalized.includes('pentaho')) {
    return <Workflow className={`${className} text-blue-500`} />;
  }
  if (normalized.includes('warehouse')) {
    return <Boxes className={`${className} text-indigo-500`} />;
  }
  if (normalized.includes('etl')) {
    return <Layers className={`${className} text-slate-600`} />;
  }
  if (normalized.includes('modeling') || normalized.includes('kimball')) {
    return <GitMerge className={`${className} text-slate-600`} />;
  }
  if (normalized.includes('cleaning') || normalized.includes('validation')) {
    return <Filter className={`${className} text-slate-600`} />;
  }
  if (normalized.includes('exploratory') || normalized.includes('analysis')) {
    return <Search className={`${className} text-slate-600`} />;
  }
  if (normalized.includes('office')) {
    return <LayoutGrid className={`${className} text-slate-600`} />;
  }
  if (normalized.includes('sql')) {
    return <Database className={`${className} text-blue-600`} />;
  }

  return <FileText className={`${className} text-slate-500`} />;
}
