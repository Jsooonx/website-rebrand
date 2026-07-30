import { Icon } from "../ui/Icon";

export function OperatorBrief() {
  return (
    <div className="operator-brief">
      <header>
        <div>
          <span className="operator-brief__kicker">NEXORA / Live operating view</span>
          <h3>Operator Brief</h3>
        </div>
        <div className="operator-brief__live"><i /> Updated 08:42</div>
      </header>

      <div className="operator-brief__priority">
        <span>Needs attention</span>
        <strong>Rotterdam distribution centre</strong>
        <p>Inbound handoff is 94 minutes late. Six priority orders enter service risk at 11:30.</p>
      </div>

      <div className="operator-brief__grid">
        <div>
          <span>Signal</span>
          <strong>Delayed handoff</strong>
          <small>Carrier event / RTM-204</small>
        </div>
        <div>
          <span>Exposure</span>
          <strong>6 priority orders</strong>
          <small>€84k order value</small>
        </div>
        <div>
          <span>Owner</span>
          <strong>Mara / Network Ops</strong>
          <small>Response due 09:05</small>
        </div>
      </div>

      <div className="operator-brief__action">
        <div className="operator-brief__action-icon">
          <Icon name="route" />
        </div>
        <div>
          <span>Recommended next move</span>
          <strong>Move two priority orders to the Antwerp route.</strong>
          <p>Protects the 11:30 SLA window while keeping the remaining load together.</p>
        </div>
        <button type="button">Review plan <span aria-hidden="true">↗</span></button>
      </div>

      <footer>
        <span>01 signal</span>
        <span>03 dependencies traced</span>
        <span>01 approval required</span>
      </footer>
    </div>
  );
}
