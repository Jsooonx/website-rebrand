import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { WorkspaceMode } from "../../content/siteData";
import { Icon } from "../ui/Icon";

type WorkspaceDensity = "full" | "hero" | "closing";

interface WorkspaceShellProps {
  mode: WorkspaceMode;
  density?: WorkspaceDensity;
}

const recentWork = ["SSO for Pro plan?", "Weekly support report", "Safari login loop issue"];

function AskView() {
  return (
    <div className="workspace-view workspace-view--ask">
      <div className="workspace-view__intro">
        <h2>What do you want to do?</h2>
        <p>Ask across your work and NEXORA will handle the busywork.</p>
      </div>
      <div className="workspace-suggestions">
        {[
          "Answer a question",
          "Summarize this link",
          "Write a draft email",
          "Create a report",
          "Check a policy",
          "Find a contact",
        ].map((label) => (
          <button key={label} type="button">{label}</button>
        ))}
      </div>
    </div>
  );
}

function VerifyView() {
  return (
    <div className="workspace-view workspace-view--verify">
      <p className="workspace-query">What is blocking the Acme renewal?</p>
      <h2>Two blockers need attention.</h2>
      <p className="workspace-answer">
        Finance has one invoice approval pending, and support has an unresolved
        SSO issue affecting the account owner.
      </p>
      <div className="workspace-sources">
        <span>Sources connected</span>
        <div><b>Docs</b><b>CRM</b><b>Help center</b></div>
      </div>
    </div>
  );
}

function ExecuteView() {
  return (
    <div className="workspace-view workspace-view--execute">
      <p className="workspace-query">Create a bug ticket and notify the owner.</p>
      <section className="workspace-ticket">
        <span>Ticket ready</span>
        <strong>Login loop on Safari</strong>
        <small>Assigned to Jane · High priority</small>
      </section>
      <section className="workspace-approval">
        <span>Approval required</span>
        <p>Policy: Create ticket is not default.</p>
        <div><button type="button">Confirm</button><button type="button">Cancel</button></div>
      </section>
    </div>
  );
}

function MeasureView() {
  return (
    <div className="workspace-view workspace-view--measure">
      <div className="workspace-measure-tabs"><b>Trends</b><span>Questions</span><span>Gaps to fill</span></div>
      <div className="workspace-metrics"><div><strong>28%</strong><span>Billing questions</span></div><div><strong>22%</strong><span>Follow-ups</span></div></div>
      <ul className="workspace-insights"><li>Billing questions rose 28% week over week.</li><li>Refund-related tickets made up 22% of all support volume.</li><li>First-response time was 17% slower than last week.</li></ul>
    </div>
  );
}

function ModeView({ mode }: Pick<WorkspaceShellProps, "mode">) {
  if (mode === "verify") return <VerifyView />;
  if (mode === "execute") return <ExecuteView />;
  if (mode === "measure") return <MeasureView />;
  return <AskView />;
}

export function WorkspaceShell({ mode, density = "full" }: WorkspaceShellProps) {
  const reducedMotion = useReducedMotion();
  const compact = density !== "full";

  return (
    <section className={`workspace workspace--${density}`} aria-label={`NEXORA ${mode} workspace`}>
      <aside className="workspace-sidebar" aria-label="Recent workspace activity">
        <div className="workspace-sidebar__brand"><i /><span>N</span></div>
        <button type="button" className="workspace-new-chat">New chat</button>
        <div className="workspace-recents">
          {recentWork.map((item, index) => <button type="button" key={item}><Icon name={index === 1 ? "signal" : "layers"} size={14} />{item}</button>)}
        </div>
        <div className="workspace-user"><i>AK</i><span>Alex Carter<small>NEXORA team</small></span></div>
      </aside>
      <div className="workspace-main">
        <header className="workspace-topbar">
          <h1>{mode[0].toUpperCase() + mode.slice(1)}</h1>
          <div><button type="button" aria-label="Search workspace">⌕</button><button type="button" aria-label="Open workspace menu"><Icon name="menu" size={15} /></button></div>
        </header>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={mode} className="workspace-content" initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }} transition={{ duration: reducedMotion ? 0.1 : 0.22, ease: [0.2, 0, 0, 1] }}>
            <ModeView mode={mode} />
          </motion.div>
        </AnimatePresence>
        {!compact && <footer className="workspace-composer"><span>Ask anything. Type @ for mentions and / for shortcuts.</span><div><Icon name="layers" size={14} /><button type="button" aria-label="Send message"><Icon name="arrow-right" size={14} /></button></div></footer>}
      </div>
    </section>
  );
}
