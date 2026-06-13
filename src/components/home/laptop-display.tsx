"use client";

import Image from "next/image";

/**
 * Laptop with realistic mockup image and HTML code editor overlay.
 * The screen content is an HTML div overlaid on the laptop screen area.
 */
export function LaptopDisplay() {
  return (
    <div className="relative w-[320px] md:w-[380px] lg:w-[440px]">
      {/* Laptop mockup image */}
      <div className="relative">
        <Image
          src="/laptop-mockup.png"
          alt="Laptop showing code editor with development projects"
          width={440}
          height={290}
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          priority
        />
        {/* Code editor overlay positioned over the screen */}
        <div
          className="absolute rounded-[3px] overflow-hidden"
          style={{
            top: "5.5%",
            left: "11.5%",
            width: "77%",
            height: "71%",
          }}
        >
          <div className="w-full h-full bg-[#1e1e2e] text-[10px] lg:text-[11px] font-mono leading-[1.5] p-2 overflow-hidden">
            {/* Window title bar */}
            <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-white/10">
              <span className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#febc2e]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[9px] text-white/30 font-sans">app.py</span>
              <span className="text-[9px] text-white/20 font-sans ml-2">Dashboard.tsx</span>
              <span className="text-[9px] text-white/20 font-sans ml-2">analysis.sql</span>
            </div>
            {/* Code lines */}
            <div className="space-y-[1px]">
              <CodeLine num={1}><Kw>import</Kw> <Str>pandas</Str> <Kw>as</Kw> <Str>pd</Str></CodeLine>
              <CodeLine num={2}><Kw>import</Kw> <Str>numpy</Str> <Kw>as</Kw> <Str>np</Str></CodeLine>
              <CodeLine num={3}><Kw>from</Kw> <Str>sklearn.model_selection</Str> <Kw>import</Kw> <Fn>train_test_split</Fn></CodeLine>
              <CodeLine num={4}>{""}</CodeLine>
              <CodeLine num={5}><Kw>class</Kw> <Fn>DataPipeline</Fn><Op>:</Op></CodeLine>
              <CodeLine num={6} indent={1}><Kw>def</Kw> <Fn>__init__</Fn><Op>(</Op><Param>self</Param><Op>,</Op> <Param>source</Param><Op>:</Op> <Type>str</Type><Op>)</Op><Op>:</Op></CodeLine>
              <CodeLine num={7} indent={2}><Param>self</Param><Op>.</Op>data <Op>=</Op> pd<Op>.</Op><Fn>read_csv</Fn><Op>(</Op><Str>&quot;data.csv&quot;</Str><Op>)</Op></CodeLine>
              <CodeLine num={8} indent={2}><Param>self</Param><Op>.</Op>model <Op>=</Op> <Kw>None</Kw></CodeLine>
              <CodeLine num={9}>{""}</CodeLine>
              <CodeLine num={10} indent={1}><Kw>def</Kw> <Fn>analyze</Fn><Op>(</Op><Param>self</Param><Op>)</Op> <Op>-&gt;</Op> <Type>dict</Type><Op>:</Op></CodeLine>
              <CodeLine num={11} indent={2}><Cm># Feature engineering</Cm></CodeLine>
              <CodeLine num={12} indent={2}>features <Op>=</Op> <Param>self</Param><Op>.</Op>data<Op>.</Op><Fn>select_dtypes</Fn><Op>(</Op></CodeLine>
              <CodeLine num={13} indent={3}>include<Op>=</Op><Op>[</Op><Str>&apos;float64&apos;</Str><Op>,</Op> <Str>&apos;int64&apos;</Str><Op>]</Op></CodeLine>
              <CodeLine num={14} indent={2}><Op>)</Op></CodeLine>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop reflection on desk */}
      <div
        className="absolute -bottom-2 left-[10%] right-[10%] h-3 rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(0,0,0,0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* Syntax highlighting helper components */
function CodeLine({ num, children, indent = 0 }: { num: number; children: React.ReactNode; indent?: number }) {
  return (
    <div className="flex">
      <span className="w-5 text-right mr-3 text-white/15 select-none shrink-0 text-[9px]">{num}</span>
      <span style={{ paddingLeft: `${indent * 12}px` }} className="text-white/80 whitespace-nowrap">{children}</span>
    </div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-[#c678dd]">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-[#98c379]">{children}</span>;
}

function Fn({ children }: { children: React.ReactNode }) {
  return <span className="text-[#61afef]">{children}</span>;
}

function Op({ children }: { children: React.ReactNode }) {
  return <span className="text-white/50">{children}</span>;
}

function Param({ children }: { children: React.ReactNode }) {
  return <span className="text-[#e5c07b]">{children}</span>;
}

function Type({ children }: { children: React.ReactNode }) {
  return <span className="text-[#56b6c2]">{children}</span>;
}

function Cm({ children }: { children: React.ReactNode }) {
  return <span className="text-[#5c6370] italic">{children}</span>;
}
