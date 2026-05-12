import { useState, useEffect } from "react";

// ============================================================
// MASTER PROFILE — Vishal Ashokan
// ============================================================
const PROFILE = {
  name: "Vishal Ashokan",
  email: "vishal@ashokanengineering.co.uk",
  phone: "+44 7423 470093",
  location: "London, UK",
  rightToWork: "UK Citizen — No Sponsorship Required",
  offshore: "Available",
  linkedin: "https://www.linkedin.com/in/vishal-ashokan-24725b70/",
  company: "Ashokan Engineering Consultancy Ltd",
  yearsExp: "12+",

  cvVersions: {
    piping: {
      label: "Senior Piping Designer / AVEVA E3D Admin",
      title: "Principal / Senior Piping Designer",
      summary: `Senior Piping Designer and AVEVA E3D/PDMS specialist with 12+ years of experience across Concept, Studies, FEED and Detail Engineering (EPC) on Oil & Gas, offshore and energy projects. Proven capability in leading piping layouts, developing working drawings from equipment specifications, interpreting P&IDs, line lists and piping material specifications, and delivering GA drawings, isometrics, MTOs and bills of material to industry standards. Experienced in all phases of project design from basic data review through to construction support. Offshore trips available.`
    },
    software: {
      label: "Software Engineer — AVEVA Domain",
      title: "Software Engineer | C# | AVEVA Domain Specialist",
      summary: `Software engineer in practice and a senior AVEVA domain specialist by profession. Over 12 years delivering industrial engineering projects using AVEVA E3D, PDMS and associated toolchains, consistently applying software-engineering thinking: writing C#, Python and PML automation tools; administering complex databases; debugging production issues; and governing quality through systematic testing. Certified Scrum Master (CSM) and Product Owner (CSPO) with hands-on agile delivery experience.`
    }
  },

  skills: {
    "AVEVA/CAD": ["AVEVA E3D","AVEVA PDMS","CATS & SPECS","PML1","PML2","Isodraft","Draft","Global Workshare","Database Management","Model Administration"],
    "Design": ["Piping Design","GA Drawings","Isometrics","MTO Generation","P&ID Interpretation","Plot Plans","Equipment Layouts","Bill of Materials","Clash Detection"],
    "Software": ["Python","C#","SQL","PostgreSQL","React","HTML/CSS","Azure","Git"],
    "Tools": ["AutoCAD","SP3D","Navisworks","Caesar II","SolidWorks","AIZE","COMOS","KESYS"],
    "Standards": ["ASME B31.3","BS","API","PED","ISO"],
    "Certifications": ["CSPO — Scrum Alliance","CSM — Scrum Alliance","SAFe/Agile"],
  },

  experience: [
    {
      title: "E3D CATS & SPECS Coordinator / Senior Piping Designer",
      company: "Aker Solutions", location: "London, UK", period: "Sep 2022 – Dec 2025",
      projects: ["Valhall PWP (Norway)","Hugin B (Norway)","Norfolk Vanguard East & West (UK)"],
      bullets: [
        "Led full CATS & SPECS administration for Piping, Structural, Electrical and HVAC disciplines across global execution projects",
        "Developed C# and Python automation utilities for E3D model checks, MTO generation and data-integrity reporting",
        "Administered E3D/PDMS databases, global workshare (Hub/Satellite), clash applications and model review coordination",
        "Developed working drawings — plans, GA layouts, isometrics and bills of material — in compliance with ASME, API and project standards",
        "Interpreted P&IDs, line lists and piping material specifications across all design phases from basic data to IFC",
        "Supported AIZE platform rollout, KESYS and COMOS integration workflows",
      ]
    },
    {
      title: "E3D Administrator & Senior Piping Designer",
      company: "Viensys India Pvt Ltd", location: "Kochi, India", period: "Sep 2020 – Jul 2021",
      projects: ["Gas processing facilities (Detail Engineering)"],
      bullets: [
        "Led piping layouts, GA drawings and isometric production from P&IDs, line lists and piping material specifications",
        "Administered E3D database, automated routine checks and report extraction using PML and Python",
        "Performed data integrity checks, clash detection and model review coordination",
      ]
    },
    {
      title: "PDMS / E3D Administrator & Senior Piping Designer",
      company: "Petrocil Engineers & Consultants", location: "Kochi, India", period: "Sep 2018 – Sep 2020",
      projects: ["Gas plant and field development (FEED & Detail Engineering)"],
      bullets: [
        "Senior design resource for piping layout, GA drawings, isometric production and MTO generation",
        "Built PML automation scripts for catalogue updates, clash coordination and MTO extraction",
        "Administered PDMS database and enforced project CAD standards",
      ]
    },
    {
      title: "Senior Piping Designer & Junior PDMS Administrator",
      company: "Engineers India Ltd (EIL)", location: "New Delhi, India", period: "Jul 2015 – Aug 2018",
      projects: ["Major EPC refinery and petrochemical projects"],
      bullets: [
        "Developed piping layouts — plot plans, equipment layouts, GA drawings and isometrics for large-scale EPC refinery projects",
        "Interpreted P&IDs, engineering standards and piping material specifications for IFC deliverables",
        "Supported PDMS administration and multi-discipline coordination",
      ]
    },
    {
      title: "Piping Engineer",
      company: "Oiltech Engineering Ltd", location: "FPSO Angola", period: "Jul 2014 – Jun 2015",
      projects: ["Concept, FEED and Detail Engineering — FPSO offshore Angola"],
      bullets: [
        "Completed full design cycle from concept to detail engineering on FPSO project",
        "Produced layouts, GA drawings and isometrics using PDMS and AutoCAD",
        "Conducted vendor drawing review and provided offshore site support",
      ]
    },
    {
      title: "Piping Designer",
      company: "Thyssenkrupp Uhde India", location: "India", period: "Feb 2013 – Jul 2014",
      projects: ["Chemical Plant Projects"],
      bullets: [
        "PDMS modelling, plant and utility piping layouts for chemical process projects",
        "Produced piping isometrics, GA drawings and MTOs from basic engineering data",
      ]
    },
  ],

  softwareProjects: [
    { name: "IntelliPlant (React/JS)", desc: "Full-stack process-plant design & procurement management application" },
    { name: "PID Studio (React/SVG)", desc: "ISA 5.1 P&ID authoring tool with multi-sheet support and export pipeline" },
    { name: "PipeSpec Web App (FastAPI/PostgreSQL)", desc: "Piping Material Specification authoring system with REST API" },
    { name: "E3D Automation Toolkit (Python/C#)", desc: "Utilities for clash reporting, MTO extraction and data-integrity checks" },
  ],
};

const QUICK_KEYWORDS = [
  "AVEVA E3D Administrator UK",
  "Senior Piping Designer UK",
  "PDMS Administrator UK",
  "E3D CATS SPECS Coordinator",
  "Plant Designer AVEVA UK",
  "Piping Engineer Oil Gas UK",
  "Digital Engineering Consultant UK",
  "PML Developer AVEVA UK",
  "CAD Administrator EPC UK",
  "Python Engineer Engineering UK",
];

const STATUSES = ["Applied","Interview Scheduled","Interview Done","Awaiting Response","Offered","Rejected","Withdrawn"];
const STATUS_COLORS = {
  "Applied":"#3b82f6","Interview Scheduled":"#f59e0b","Interview Done":"#8b5cf6",
  "Awaiting Response":"#64748b","Offered":"#22c55e","Rejected":"#ef4444","Withdrawn":"#94a3b8"
};

// Styles
const st = {
  wrap:   { fontFamily:"var(--font-sans)", color:"var(--color-text-primary)", minHeight:"100vh" },
  card:   { background:"var(--color-background-primary)", border:"0.5px solid var(--color-border-tertiary)", borderRadius:"var(--border-radius-lg)", padding:"1rem 1.25rem" },
  pill:   (bg,col) => ({ background:bg, color:col, fontSize:11, padding:"2px 8px", borderRadius:20, fontWeight:500, display:"inline-block", whiteSpace:"nowrap" }),
  btn:    (p) => ({ padding:"8px 18px", borderRadius:"var(--border-radius-md)", fontWeight:500, fontSize:13, cursor:"pointer", border:p?"none":"0.5px solid var(--color-border-secondary)", background:p?"#1d4ed8":"transparent", color:p?"#fff":"var(--color-text-primary)" }),
  smBtn:  (a) => ({ padding:"4px 10px", borderRadius:20, border:"0.5px solid", fontSize:11, fontWeight:500, cursor:"pointer", background:a?"#1d4ed8":"transparent", color:a?"#fff":"var(--color-text-secondary)", borderColor:a?"#1d4ed8":"var(--color-border-tertiary)" }),
  input:  { width:"100%", boxSizing:"border-box" },
  label:  { fontSize:12, color:"var(--color-text-secondary)", display:"block", marginBottom:4 },
  metric: { background:"var(--color-background-secondary)", borderRadius:"var(--border-radius-md)", padding:"0.875rem 1rem", textAlign:"center" },
};

// localStorage helpers (replaces window.storage)
const store = {
  get: (key) => { try { return localStorage.getItem(key); } catch { return null; } },
  set: (key, val) => { try { localStorage.setItem(key, val); } catch {} },
};

// ============================================================
// LOGIN
// ============================================================
function LoginScreen({ onLogin }) {
  const [u,setU]=useState(""); const [p,setP]=useState(""); const [err,setErr]=useState("");
  const go = () => u==="admin"&&p==="ashokan2026" ? onLogin() : setErr("Invalid. Try: admin / ashokan2026");
  return (
    <div style={{...st.wrap,display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem",minHeight:"100vh",background:"var(--color-background-secondary)"}}>
      <div style={{...st.card,width:"100%",maxWidth:340,padding:"2rem"}}>
        <div style={{textAlign:"center",marginBottom:"1.5rem"}}>
          <div style={{width:48,height:48,background:"#1d4ed8",borderRadius:12,margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>💼</div>
          <p style={{fontWeight:600,fontSize:15,margin:"0 0 3px"}}>Ashokan Engineering</p>
          <p style={{fontSize:12,color:"var(--color-text-secondary)",margin:0}}>Job Intelligence Dashboard · UK Focus</p>
        </div>
        <label style={st.label}>Username</label>
        <input style={{...st.input,marginBottom:10}} value={u} onChange={e=>setU(e.target.value)} placeholder="admin" onKeyDown={e=>e.key==="Enter"&&go()} />
        <label style={st.label}>Password</label>
        <input type="password" style={{...st.input,marginBottom:14}} value={p} onChange={e=>setP(e.target.value)} placeholder="••••••••" onKeyDown={e=>e.key==="Enter"&&go()} />
        {err&&<p style={{color:"var(--color-text-danger)",fontSize:12,marginBottom:10}}>{err}</p>}
        <button style={{...st.btn(true),width:"100%"}} onClick={go}>Sign In →</button>
      </div>
    </div>
  );
}

// ============================================================
// JOB SCANNER
// ============================================================
function JobScannerTab({ onGenerateCV, onApply }) {
  const [keyword,setKeyword]=useState("AVEVA E3D Administrator UK");
  const [location,setLocation]=useState("United Kingdom");
  const [jobs,setJobs]=useState([]);
  const [loading,setLoading]=useState(false);
  const [selected,setSelected]=useState(null);
  const [error,setError]=useState("");

  async function search() {
    setLoading(true); setError(""); setJobs([]); setSelected(null);
    try {
      const prompt = `You are a UK engineering recruitment specialist. Search the web RIGHT NOW for current live UK job postings matching: "${keyword}" in "${location}".

Search on: reed.co.uk, indeed.co.uk, totaljobs.com, cv-library.co.uk, s1jobs.com, engineeringjobs.co.uk, oil-gas-jobs.com

Candidate: Senior AVEVA E3D/PDMS Administrator & Principal Piping Designer, 12+ years EPC, London UK, Right to Work in UK, CSPO & CSM certified.

Return ONLY a valid JSON array of 8-10 current job listings (no markdown):
[{"id":"1","title":"","company":"","location":"","salary":"","type":"","posted":"","source":"","url":"","description":"","requirements":[],"matchScore":85,"matchReasons":[]}]`;

      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          model:"claude-sonnet-4-20250514",
          max_tokens:4000,
          tools:[{type:"web_search_20250305",name:"web_search"}],
          messages:[{role:"user",content:prompt}]
        })
      });
      const data = await res.json();
      const text = data.content?.filter(b=>b.type==="text").map(b=>b.text).join("") || "";
      const match = text.match(/\[[\s\S]*?\]/);
      if(match) setJobs(JSON.parse(match[0]).sort((a,b)=>b.matchScore-a.matchScore));
      else throw new Error("Parse failed");
    } catch(e) { setError("Search failed. Check connection and try again."); }
    finally { setLoading(false); }
  }

  return (
    <div>
      <div style={{...st.card,marginBottom:14}}>
        <div style={{display:"flex",gap:10,marginBottom:10,flexWrap:"wrap"}}>
          <div style={{flex:2,minWidth:180}}>
            <label style={st.label}>Search Keywords</label>
            <input style={st.input} value={keyword} onChange={e=>setKeyword(e.target.value)} onKeyDown={e=>e.key==="Enter"&&search()} placeholder="e.g. AVEVA E3D Administrator UK" />
          </div>
          <div style={{flex:1,minWidth:130}}>
            <label style={st.label}>Location</label>
            <select style={st.input} value={location} onChange={e=>setLocation(e.target.value)}>
              <option>United Kingdom</option>
              <option>London, UK</option>
              <option>Aberdeen, UK</option>
              <option>Remote UK</option>
            </select>
          </div>
          <div style={{display:"flex",alignItems:"flex-end"}}>
            <button style={{...st.btn(true),whiteSpace:"nowrap"}} onClick={search} disabled={loading}>
              {loading?"⏳ Searching...":"🔍 Search UK Jobs"}
            </button>
          </div>
        </div>
        <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
          {QUICK_KEYWORDS.map(kw=>(
            <button key={kw} onClick={()=>setKeyword(kw)} style={st.smBtn(keyword===kw)}>{kw}</button>
          ))}
        </div>
      </div>

      {error&&<p style={{color:"var(--color-text-danger)",fontSize:12,marginBottom:10}}>{error}</p>}

      {loading&&(
        <div style={{...st.card,textAlign:"center",padding:"2.5rem"}}>
          <p style={{fontSize:14,margin:"0 0 8px"}}>🔍 Searching UK engineering job boards...</p>
          <p style={{fontSize:12,color:"var(--color-text-secondary)",margin:0}}>Reed · Indeed · TotalJobs · CV-Library · Engineering Jobs UK</p>
          <p style={{fontSize:11,color:"var(--color-text-secondary)",marginTop:8}}>This may take 20-30 seconds</p>
        </div>
      )}

      {jobs.length>0&&(
        <div style={{display:"grid",gridTemplateColumns:selected?"1fr 1fr":"1fr",gap:10}}>
          <div>
            <p style={{fontSize:11,color:"var(--color-text-secondary)",marginBottom:8}}>{jobs.length} jobs found — sorted by match score</p>
            {jobs.map(job=>(
              <div key={job.id} onClick={()=>setSelected(job)} style={{...st.card,marginBottom:8,cursor:"pointer",border:selected?.id===job.id?"1.5px solid #1d4ed8":"0.5px solid var(--color-border-tertiary)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                  <div style={{flex:1,paddingRight:8}}>
                    <p style={{fontWeight:500,fontSize:13,margin:"0 0 2px"}}>{job.title}</p>
                    <p style={{fontSize:12,color:"var(--color-text-secondary)",margin:0}}>{job.company} · {job.location}</p>
                  </div>
                  <span style={{...st.pill(job.matchScore>=90?"#22c55e22":job.matchScore>=75?"#f59e0b22":"#94a3b822",job.matchScore>=90?"#22c55e":job.matchScore>=75?"#f59e0b":"#94a3b8"),fontWeight:700,fontSize:12}}>{job.matchScore}%</span>
                </div>
                <div style={{display:"flex",gap:5,flexWrap:"wrap",alignItems:"center",marginTop:6}}>
                  <span style={st.pill("#3b82f622","#3b82f6")}>{job.source}</span>
                  <span style={st.pill("var(--color-background-secondary)","var(--color-text-secondary)")}>{job.type}</span>
                  <span style={{fontSize:11,color:"var(--color-text-secondary)",marginLeft:"auto"}}>{job.posted}</span>
                </div>
                <p style={{fontSize:12,color:"var(--color-text-secondary)",margin:"5px 0 0",fontWeight:500}}>{job.salary}</p>
              </div>
            ))}
          </div>

          {selected&&(
            <div style={{...st.card,position:"sticky",top:80,alignSelf:"flex-start",maxHeight:"80vh",overflowY:"auto"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                <div>
                  <p style={{fontWeight:500,fontSize:14,margin:"0 0 3px"}}>{selected.title}</p>
                  <p style={{fontSize:12,color:"var(--color-text-secondary)",margin:0}}>{selected.company} · {selected.location}</p>
                </div>
                <button onClick={()=>setSelected(null)} style={{background:"transparent",border:"none",fontSize:20,cursor:"pointer",color:"var(--color-text-secondary)"}}>×</button>
              </div>
              <p style={{fontSize:13,fontWeight:500,margin:"0 0 8px",color:"var(--color-text-secondary)"}}>{selected.salary} · {selected.type}</p>
              <p style={{fontSize:13,color:"var(--color-text-secondary)",lineHeight:1.6,margin:"0 0 12px"}}>{selected.description}</p>
              {selected.requirements?.length>0&&(
                <div style={{marginBottom:12}}>
                  <p style={{fontSize:12,fontWeight:500,margin:"0 0 6px"}}>Requirements:</p>
                  {selected.requirements.map((r,i)=><p key={i} style={{fontSize:12,color:"var(--color-text-secondary)",margin:"3px 0",paddingLeft:12}}>• {r}</p>)}
                </div>
              )}
              {selected.matchReasons?.length>0&&(
                <div style={{background:"#dcfce7",borderRadius:6,padding:"10px 12px",marginBottom:12}}>
                  <p style={{fontSize:11,fontWeight:600,color:"#166534",margin:"0 0 5px"}}>WHY YOU MATCH</p>
                  {selected.matchReasons.map((r,i)=><p key={i} style={{fontSize:12,color:"#166534",margin:"2px 0"}}>✓ {r}</p>)}
                </div>
              )}
              {selected.url&&<a href={selected.url} target="_blank" rel="noreferrer" style={{fontSize:12,color:"#3b82f6",display:"block",marginBottom:12}}>🔗 View Original Job →</a>}
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                <button style={{...st.btn(true),width:"100%"}} onClick={()=>onGenerateCV(selected)}>📄 Generate Tailored CV</button>
                <button style={{...st.btn(false),width:"100%"}} onClick={()=>onApply(selected)}>✅ Track Application</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================
// CV GENERATOR
// ============================================================
function CVGeneratorTab({ preJob }) {
  const [jobDesc,setJobDesc]=useState("");
  const [cvVer,setCvVer]=useState("piping");
  const [note,setNote]=useState("");
  const [cv,setCV]=useState("");
  const [loading,setLoading]=useState(false);
  const [copied,setCopied]=useState(false);

  useEffect(()=>{
    if(preJob){
      setJobDesc(`JOB TITLE: ${preJob.title}\nCOMPANY: ${preJob.company}\nLOCATION: ${preJob.location}\nSALARY: ${preJob.salary}\nTYPE: ${preJob.type}\n\nDESCRIPTION:\n${preJob.description}\n\nREQUIREMENTS:\n${preJob.requirements?.map(r=>`• ${r}`).join("\n")||""}`);
    }
  },[preJob?.id]);

  async function generate() {
    if(!jobDesc.trim()) return;
    setLoading(true); setCV("");
    const version = PROFILE.cvVersions[cvVer];
    const expText = PROFILE.experience.map(e=>`
ROLE: ${e.title} | ${e.company}, ${e.location} | ${e.period}
PROJECTS: ${e.projects.join(", ")}
${e.bullets.map(b=>`  • ${b}`).join("\n")}`).join("\n");

    const prompt = `You are a specialist Oil & Gas and EPC sector CV writer.
Generate a COMPLETE, PROFESSIONAL, tailored CV. Keep ALL facts 100% accurate — DO NOT invent experience.

CANDIDATE PROFILE:
Name: ${PROFILE.name} | Phone: ${PROFILE.phone} | Email: ${PROFILE.email}
Location: ${PROFILE.location} | ${PROFILE.rightToWork} | Offshore: ${PROFILE.offshore}
LinkedIn: ${PROFILE.linkedin}

CV VERSION: ${version.label}
TITLE: ${version.title}
SUMMARY: ${version.summary}

SKILLS:
${Object.entries(PROFILE.skills).map(([k,v])=>`${k}: ${v.join(", ")}`).join("\n")}

EXPERIENCE:
${expText}

EDUCATION: B.E. Mechanical Engineering | RGPV University, India | 2008–2012
CERTIFICATIONS: CSPO (Scrum Alliance), CSM (Scrum Alliance)

SOFTWARE PROJECTS:
${PROFILE.softwareProjects.map(p=>`• ${p.name}: ${p.desc}`).join("\n")}

${note?`SPECIAL NOTE: ${note}`:""}

TARGET JOB:
${jobDesc}

INSTRUCTIONS:
1. Write "WHY I AM A STRONG FIT:" paragraph first (3-4 sentences, job-specific)
2. Reorder skills and experience bullets to lead with most relevant for THIS job
3. Use job description keywords where they genuinely match actual experience
4. Sections: Contact → Strong Fit → Core Competencies → Experience → Software Projects → Education & Certs
5. Professional, ATS-friendly, no invented content
6. End with: "References available on request."`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:3000,messages:[{role:"user",content:prompt}]})
      });
      const data = await res.json();
      setCV(data.content?.map(b=>b.text||"").join("")||"Generation failed.");
    } catch { setCV("Generation failed. Please try again."); }
    finally { setLoading(false); }
  }

  function copy() { navigator.clipboard.writeText(cv).then(()=>{ setCopied(true); setTimeout(()=>setCopied(false),2000); }); }

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
        <div style={st.card}>
          <p style={{fontWeight:500,fontSize:14,margin:"0 0 12px"}}>Generate Tailored CV</p>
          <label style={st.label}>1 · Paste Full Job Description</label>
          <textarea style={{...st.input,height:200,fontFamily:"var(--font-sans)",fontSize:13,resize:"vertical",marginBottom:12}} value={jobDesc} onChange={e=>setJobDesc(e.target.value)} placeholder="Paste the complete job posting here — title, company, description, requirements, qualifications...&#10;&#10;The more detail you paste, the better the tailored CV." />
          <label style={st.label}>2 · CV Version</label>
          <select style={{...st.input,marginBottom:12}} value={cvVer} onChange={e=>setCvVer(e.target.value)}>
            {Object.entries(PROFILE.cvVersions).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}
          </select>
          <label style={st.label}>3 · Special Instructions (optional)</label>
          <input style={{...st.input,marginBottom:14}} value={note} onChange={e=>setNote(e.target.value)} placeholder="e.g. Emphasise offshore experience, highlight FPSO Angola..." />
          <button style={{...st.btn(true),width:"100%"}} onClick={generate} disabled={loading||!jobDesc.trim()}>
            {loading?"⏳ Generating CV — please wait...":"🤖 Generate Tailored CV with AI"}
          </button>
          {loading&&<p style={{fontSize:11,color:"var(--color-text-secondary)",marginTop:8,textAlign:"center"}}>~20 seconds</p>}
        </div>

        <div style={{...st.card,background:"var(--color-background-secondary)"}}>
          <p style={{fontWeight:500,fontSize:13,margin:"0 0 12px"}}>Your Profile</p>
          <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
            {[["12+","Years EPC","#1d4ed8"],["✅","UK Work","#22c55e"],["CSPO","+ CSM","#f59e0b"]].map(([v,l,c])=>(
              <div key={l} style={{...st.card,flex:1,padding:"0.625rem",textAlign:"center",minWidth:70}}>
                <p style={{fontSize:18,fontWeight:700,margin:0,color:c}}>{v}</p>
                <p style={{fontSize:10,color:"var(--color-text-secondary)",margin:0}}>{l}</p>
              </div>
            ))}
          </div>
          {Object.entries(PROFILE.skills).slice(0,4).map(([cat,skills])=>(
            <div key={cat} style={{marginBottom:10}}>
              <p style={{fontSize:11,fontWeight:600,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:1,margin:"0 0 4px"}}>{cat}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                {skills.slice(0,7).map(sk=><span key={sk} style={{fontSize:10,padding:"2px 8px",background:"var(--color-background-primary)",borderRadius:10,color:"var(--color-text-secondary)"}}>{sk}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {cv&&(
        <div style={st.card}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <p style={{fontWeight:500,fontSize:14,margin:0}}>✅ Tailored CV — Ready to Send</p>
            <button style={{...st.btn(false),fontSize:12,padding:"5px 12px"}} onClick={copy}>
              {copied?"✓ Copied!":"📋 Copy All"}
            </button>
          </div>
          <pre style={{fontSize:12,lineHeight:1.75,whiteSpace:"pre-wrap",wordBreak:"break-word",margin:0,color:"var(--color-text-primary)",maxHeight:600,overflowY:"auto"}}>{cv}</pre>
        </div>
      )}
    </div>
  );
}

// ============================================================
// APPLICATIONS TRACKER
// ============================================================
function ApplicationsTab({ pendingJob, clearPending }) {
  const [apps,setApps]=useState([]);
  const [showAdd,setShowAdd]=useState(false);
  const [filter,setFilter]=useState("All");
  const emptyForm = { title:"",company:"",location:"",type:"Permanent",status:"Applied",salary:"",url:"",notes:"",date:new Date().toISOString().split("T")[0],cvVersion:"piping" };
  const [form,setForm]=useState(emptyForm);

  useEffect(()=>{
    const saved = store.get("uk_applications");
    if(saved) try { setApps(JSON.parse(saved)); } catch {}
  },[]);

  useEffect(()=>{
    if(pendingJob){ setForm({...emptyForm,title:pendingJob.title||"",company:pendingJob.company||"",location:pendingJob.location||"",salary:pendingJob.salary||"",url:pendingJob.url||"",type:pendingJob.type||"Permanent"}); setShowAdd(true); }
  },[pendingJob]);

  function save(list) { store.set("uk_applications",JSON.stringify(list)); setApps(list); }
  function addApp() { if(!form.title||!form.company) return; save([...apps,{...form,id:Date.now().toString()}]); setForm(emptyForm); setShowAdd(false); if(clearPending) clearPending(); }
  function updateStatus(id,status) { save(apps.map(a=>a.id===id?{...a,status}:a)); }
  function del(id) { save(apps.filter(a=>a.id!==id)); }

  const filtered = filter==="All" ? apps : apps.filter(a=>a.status===filter);
  const counts = STATUSES.reduce((acc,s)=>({...acc,[s]:apps.filter(a=>a.status===s).length}),{});

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:8,marginBottom:14}}>
        {[["Total",apps.length,"#1d4ed8"],["Applied",counts["Applied"]||0,"#3b82f6"],["Interviews",(counts["Interview Scheduled"]||0)+(counts["Interview Done"]||0),"#f59e0b"],["Offered",counts["Offered"]||0,"#22c55e"],["Rejected",counts["Rejected"]||0,"#ef4444"]].map(([l,v,c])=>(
          <div key={l} style={{...st.metric,border:`1.5px solid ${c}22`}}>
            <p style={{fontSize:11,color:"var(--color-text-secondary)",margin:"0 0 4px"}}>{l}</p>
            <p style={{fontSize:22,fontWeight:600,margin:0,color:c}}>{v}</p>
          </div>
        ))}
      </div>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexWrap:"wrap",gap:8}}>
        <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
          {["All",...STATUSES].map(s=><button key={s} onClick={()=>setFilter(s)} style={st.smBtn(filter===s)}>{s}</button>)}
        </div>
        <button style={st.btn(true)} onClick={()=>setShowAdd(!showAdd)}>+ Add Application</button>
      </div>

      {showAdd&&(
        <div style={{...st.card,marginBottom:14}}>
          <p style={{fontWeight:500,fontSize:13,margin:"0 0 12px"}}>New Application</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            <div><label style={st.label}>Job Title *</label><input style={st.input} value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="Senior Piping Designer" /></div>
            <div><label style={st.label}>Company *</label><input style={st.input} value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Wood PLC" /></div>
            <div><label style={st.label}>Location</label><input style={st.input} value={form.location} onChange={e=>setForm({...form,location:e.target.value})} placeholder="London, UK" /></div>
            <div><label style={st.label}>Salary</label><input style={st.input} value={form.salary} onChange={e=>setForm({...form,salary:e.target.value})} placeholder="£55,000 or £65/hr" /></div>
            <div><label style={st.label}>Type</label><select style={st.input} value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>{["Permanent","Contract","Freelance"].map(t=><option key={t}>{t}</option>)}</select></div>
            <div><label style={st.label}>Status</label><select style={st.input} value={form.status} onChange={e=>setForm({...form,status:e.target.value})}>{STATUSES.map(s=><option key={s}>{s}</option>)}</select></div>
            <div><label style={st.label}>CV Version Used</label><select style={st.input} value={form.cvVersion} onChange={e=>setForm({...form,cvVersion:e.target.value})}>{Object.entries(PROFILE.cvVersions).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</select></div>
            <div><label style={st.label}>Date Applied</label><input type="date" style={st.input} value={form.date} onChange={e=>setForm({...form,date:e.target.value})} /></div>
          </div>
          <div style={{marginTop:10}}><label style={st.label}>Job URL</label><input style={st.input} value={form.url} onChange={e=>setForm({...form,url:e.target.value})} placeholder="https://reed.co.uk/jobs/..." /></div>
          <div style={{marginTop:10}}><label style={st.label}>Notes</label><textarea style={{...st.input,height:70,resize:"vertical",fontFamily:"var(--font-sans)"}} value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Recruiter contact, interview notes, cover letter sent..." /></div>
          <div style={{display:"flex",gap:8,marginTop:12}}>
            <button style={st.btn(true)} onClick={addApp}>Save Application</button>
            <button style={st.btn(false)} onClick={()=>setShowAdd(false)}>Cancel</button>
          </div>
        </div>
      )}

      {filtered.length===0 ? (
        <div style={{...st.card,textAlign:"center",padding:"2.5rem"}}>
          <p style={{fontSize:14,margin:"0 0 8px"}}>No applications tracked yet.</p>
          <p style={{fontSize:12,color:"var(--color-text-secondary)",margin:0}}>Use the Job Scanner to find roles, or add one manually above.</p>
        </div>
      ) : filtered.map(app=>(
        <div key={app.id} style={{...st.card,marginBottom:8}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <p style={{fontWeight:500,fontSize:13,margin:"0 0 2px"}}>{app.title}</p>
              <p style={{fontSize:12,color:"var(--color-text-secondary)",margin:"0 0 8px"}}>{app.company} · {app.location} · {app.salary}</p>
              <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:4}}>
                <span style={st.pill((STATUS_COLORS[app.status]||"#94a3b8")+"22",STATUS_COLORS[app.status]||"#94a3b8")}>{app.status}</span>
                <span style={st.pill("var(--color-background-secondary)","var(--color-text-secondary)")}>{app.type}</span>
                <span style={{fontSize:11,color:"var(--color-text-secondary)"}}>{app.date}</span>
                {app.cvVersion&&<span style={st.pill("#dbeafe","#1e40af")}>{PROFILE.cvVersions[app.cvVersion]?.label||app.cvVersion}</span>}
              </div>
              {app.notes&&<p style={{fontSize:12,color:"var(--color-text-secondary)",fontStyle:"italic",margin:"4px 0 0"}}>{app.notes}</p>}
              {app.url&&<a href={app.url} target="_blank" rel="noreferrer" style={{fontSize:11,color:"#3b82f6",display:"block",marginTop:4}}>View Job →</a>}
            </div>
            <div style={{display:"flex",gap:6,alignItems:"center"}}>
              <select value={app.status} onChange={e=>updateStatus(app.id,e.target.value)} style={{fontSize:11,padding:"3px 6px",borderRadius:4,border:"0.5px solid var(--color-border-secondary)",background:"var(--color-background-secondary)",color:"var(--color-text-primary)",cursor:"pointer"}}>
                {STATUSES.map(s=><option key={s}>{s}</option>)}
              </select>
              <button onClick={()=>del(app.id)} style={{background:"transparent",border:"none",color:"#ef4444",cursor:"pointer",fontSize:20,lineHeight:1}}>×</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// PROFILE TAB
// ============================================================
function ProfileTab() {
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
        <div style={st.card}>
          <p style={{fontWeight:500,fontSize:14,margin:"0 0 12px"}}>Personal Details</p>
          {[["Name",PROFILE.name],["Phone",PROFILE.phone],["Email",PROFILE.email],["Location",PROFILE.location],["Right to Work",PROFILE.rightToWork],["Offshore",PROFILE.offshore],["Experience",PROFILE.yearsExp+" years EPC"]].map(([l,v])=>(
            <div key={l} style={{display:"flex",gap:10,paddingBottom:8,marginBottom:8,borderBottom:"0.5px solid var(--color-border-tertiary)"}}>
              <p style={{fontSize:12,color:"var(--color-text-secondary)",width:90,flexShrink:0,margin:0}}>{l}</p>
              <p style={{fontSize:13,margin:0}}>{v}</p>
            </div>
          ))}
        </div>
        <div style={st.card}>
          <p style={{fontWeight:500,fontSize:14,margin:"0 0 12px"}}>Skills Matrix</p>
          {Object.entries(PROFILE.skills).map(([cat,skills])=>(
            <div key={cat} style={{marginBottom:10}}>
              <p style={{fontSize:11,fontWeight:600,color:"var(--color-text-secondary)",textTransform:"uppercase",letterSpacing:1,margin:"0 0 5px"}}>{cat}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                {skills.map(sk=><span key={sk} style={{fontSize:10,padding:"2px 8px",background:"var(--color-background-secondary)",borderRadius:10,color:"var(--color-text-secondary)"}}>{sk}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={st.card}>
        <p style={{fontWeight:500,fontSize:14,margin:"0 0 14px"}}>Work History</p>
        {PROFILE.experience.map((exp,i)=>(
          <div key={i} style={{display:"flex",gap:14,marginBottom:16,paddingBottom:16,borderBottom:i<PROFILE.experience.length-1?"0.5px solid var(--color-border-tertiary)":"none"}}>
            <div style={{width:8,height:8,background:"#1d4ed8",borderRadius:"50%",flexShrink:0,marginTop:5}}/>
            <div style={{flex:1}}>
              <p style={{fontWeight:500,fontSize:13,margin:"0 0 2px"}}>{exp.title}</p>
              <p style={{fontSize:12,color:"var(--color-text-secondary)",margin:"0 0 6px"}}>{exp.company} · {exp.location} · {exp.period}</p>
              <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                {exp.projects.map(p=><span key={p} style={{fontSize:10,padding:"2px 8px",background:"#dbeafe",color:"#1e40af",borderRadius:10}}>{p}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================
const TABS = [
  {id:"jobs",    label:"Job Scanner",      icon:"🔍"},
  {id:"apps",    label:"My Applications",  icon:"📋"},
  {id:"cv",      label:"CV Generator",     icon:"📄"},
  {id:"profile", label:"My Profile",       icon:"👤"},
];

export default function AshokanJobDashboard() {
  const [loggedIn,setLoggedIn]=useState(false);
  const [tab,setTab]=useState("jobs");
  const [cvJob,setCvJob]=useState(null);
  const [applyJob,setApplyJob]=useState(null);

  function handleCV(job){ setCvJob(job); setTab("cv"); }
  function handleApply(job){ setApplyJob(job); setTab("apps"); }

  if(!loggedIn) return <LoginScreen onLogin={()=>setLoggedIn(true)}/>;

  return (
    <div style={st.wrap}>
      <div style={{background:"var(--color-background-primary)",borderBottom:"0.5px solid var(--color-border-tertiary)",padding:"10px 1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:32,height:32,background:"#1d4ed8",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16}}>💼</div>
          <div>
            <p style={{fontWeight:600,fontSize:13,margin:0}}>Ashokan Job Intelligence</p>
            <p style={{fontSize:11,color:"var(--color-text-secondary)",margin:0}}>Vishal Ashokan · UK Market Focus</p>
          </div>
        </div>
        <button style={{...st.btn(false),fontSize:12,padding:"5px 12px"}} onClick={()=>setLoggedIn(false)}>Sign out</button>
      </div>

      <div style={{display:"flex",borderBottom:"0.5px solid var(--color-border-tertiary)",padding:"0 1.25rem",background:"var(--color-background-primary)",overflowX:"auto",position:"sticky",top:53,zIndex:99}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{background:"transparent",border:"none",borderBottom:tab===t.id?"2px solid #1d4ed8":"2px solid transparent",padding:"9px 14px",fontSize:12,fontWeight:500,color:tab===t.id?"#1d4ed8":"var(--color-text-secondary)",cursor:"pointer",display:"flex",alignItems:"center",gap:5,whiteSpace:"nowrap"}}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div style={{padding:"1.25rem",maxWidth:1200,margin:"0 auto"}}>
        {tab==="jobs"    && <JobScannerTab onGenerateCV={handleCV} onApply={handleApply}/>}
        {tab==="apps"    && <ApplicationsTab pendingJob={applyJob} clearPending={()=>setApplyJob(null)}/>}
        {tab==="cv"      && <CVGeneratorTab preJob={cvJob}/>}
        {tab==="profile" && <ProfileTab/>}
      </div>
    </div>
  );
}
