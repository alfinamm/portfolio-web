import React from 'react';
import {
  SiPostgresql,
  SiPython,
  SiFigma,
  SiGithub,
  SiMetabase,
  SiGoogle,
  SiDbeaver,
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
  Search,
  LayoutGrid,
  FileText,
  Boxes,
} from 'lucide-react';


export default function ToolIcon({
  name,
  tool,
  className = 'w-4 h-4',
  size,
}) {

  /*
   * Support both:
   * <ToolIcon name="Python" />
   * <ToolIcon tool="Python" />
   *
   * Projects.jsx currently uses "tool",
   * while other components may use "name".
   */

  const toolName = name ?? tool ?? '';

  /*
   * Prevent the entire application from crashing
   * if the tool value is undefined/null.
   */

  const normalized = String(toolName).toLowerCase().trim();


  /* =========================================================
     OFFICIAL BRAND ICONS
     ========================================================= */

  if (normalized.includes('postgresql')) {
    return (
      <SiPostgresql
        className={`${className} text-[#4169E1]`}
        size={size}
      />
    );
  }


  if (normalized.includes('python')) {
    return (
      <SiPython
        className={`${className} text-[#3776AB]`}
        size={size}
      />
    );
  }


  if (normalized.includes('figma')) {
    return (
      <SiFigma
        className={`${className} text-[#F24E1E]`}
        size={size}
      />
    );
  }


  if (normalized.includes('github')) {
    return (
      <SiGithub
        className={`${className} text-slate-900`}
        size={size}
      />
    );
  }


  if (normalized.includes('metabase')) {
    return (
      <SiMetabase
        className={`${className} text-[#509EE3]`}
        size={size}
      />
    );
  }


  if (normalized.includes('dbeaver')) {
    return (
      <SiDbeaver
        className={`${className} text-[#382923]`}
        size={size}
      />
    );
  }


  if (
    normalized.includes('looker') ||
    normalized.includes('google data') ||
    normalized.includes('data studio') ||
    normalized === 'google'
  ) {
    return (
      <SiGoogle
        className={`${className} text-[#4285F4]`}
        size={size}
      />
    );
  }


  /* =========================================================
     DATA & ANALYTICS TOOLS
     ========================================================= */

  if (normalized.includes('excel')) {
    return (
      <FileSpreadsheet
        className={`${className} text-emerald-600`}
        size={size}
      />
    );
  }


  if (
    normalized.includes('power bi') ||
    normalized.includes('powerbi')
  ) {
    return (
      <BarChart3
        className={`${className} text-amber-500`}
        size={size}
      />
    );
  }


  if (normalized.includes('tableau')) {
    return (
      <PieChart
        className={`${className} text-blue-600`}
        size={size}
      />
    );
  }


  if (normalized.includes('pentaho')) {
    return (
      <Workflow
        className={`${className} text-blue-500`}
        size={size}
      />
    );
  }


  if (
    normalized.includes('data warehouse') ||
    normalized === 'warehouse' ||
    normalized.includes('warehouse')
  ) {
    return (
      <Boxes
        className={`${className} text-indigo-500`}
        size={size}
      />
    );
  }


  if (
    normalized.includes('etl') ||
    normalized.includes('data integration')
  ) {
    return (
      <Layers
        className={`${className} text-slate-600`}
        size={size}
      />
    );
  }


  if (
    normalized.includes('modeling') ||
    normalized.includes('modelling') ||
    normalized.includes('kimball')
  ) {
    return (
      <GitMerge
        className={`${className} text-slate-600`}
        size={size}
      />
    );
  }


  if (
    normalized.includes('cleaning') ||
    normalized.includes('cleansing') ||
    normalized.includes('validation')
  ) {
    return (
      <Filter
        className={`${className} text-slate-600`}
        size={size}
      />
    );
  }


  if (
    normalized.includes('exploratory') ||
    normalized.includes('analysis') ||
    normalized.includes('eda')
  ) {
    return (
      <Search
        className={`${className} text-slate-600`}
        size={size}
      />
    );
  }


  if (
    normalized.includes('office') ||
    normalized.includes('microsoft')
  ) {
    return (
      <LayoutGrid
        className={`${className} text-slate-600`}
        size={size}
      />
    );
  }


  if (
    normalized === 'sql' ||
    normalized.includes(' sql') ||
    normalized.startsWith('sql')
  ) {
    return (
      <Database
        className={`${className} text-blue-600`}
        size={size}
      />
    );
  }


  /* =========================================================
     DEFAULT FALLBACK
     ========================================================= */

  return (
    <FileText
      className={`${className} text-slate-500`}
      size={size}
    />
  );
}