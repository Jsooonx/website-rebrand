import MainHeader from "@reference-export/main-header.jsx";
import PricingCard from "@reference-export/pricing-card.jsx";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  useLayoutMode,
} from "../../shared/layout";

const plans = [
  {
    title: "ONGOING SPARK",
    text: "For teams that need a steady creative partner close to the work.",
    price: 2.4,
    priceSuffix: "K/month",
    listItem1: "Two active briefs at a time",
    listItem2: "Weekly creative direction",
    listItem3: "Launch and campaign support",
    listItem4: "Priority reviews and calls",
    isPopularChoice: false,
    hasLimitedAvailability: true,
    buttonTitle: "KEEP IT BURNING",
  },
  {
    title: "ONE BIG FIRE",
    text: "For a defined identity, campaign, or digital front door with a clear finish line.",
    price: 6.8,
    priceSuffix: "K/project",
    listItem1: "Identity or campaign system",
    listItem2: "Responsive website build",
    listItem3: "One focused launch window",
    listItem4: "Handover toolkit for your team",
    isPopularChoice: true,
    hasLimitedAvailability: false,
    buttonTitle: "START THE SPARK",
  },
] as const;

export function PricingAdapter() {
  const mode = useLayoutMode();

  return (
    <section
      className="pricing-section"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <Reveal className="pricing-header">
        <MainHeader
          id="pricing-title"
          title="WAYS TO WORK"
          badge="(2)"
          text="Two clear ways to bring Kindling in. Scope follows the ambition, pace, and amount of firepower the work needs."
          variant={mode === "phone" ? "Default Phone" : "Default"}
          style={{ width: "100%" }}
        />
      </Reveal>

      <StaggerGroup className="pricing-grid">
        {plans.map((plan) => (
          <StaggerItem className="pricing-plan" key={plan.title} preset="subtle">
            <article>
              <PricingCard
                title={plan.title}
                text={plan.text}
                price={plan.price}
                priceSuffix={plan.priceSuffix}
                listItem1={plan.listItem1}
                listItem2={plan.listItem2}
                listItem3={plan.listItem3}
                listItem4={plan.listItem4}
                isPopularChoice={plan.isPopularChoice}
                hasLimitedAvailability={plan.hasLimitedAvailability}
                buttonTitle={plan.buttonTitle}
                buttonLink="#contact"
                style={{ width: "100%", height: "100%" }}
              />
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
