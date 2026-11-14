import { FAQ_ITEMS } from "../../data/faq-data";
import { Container } from "../../../../layouts/container/container";
import { FaqAccordionList } from "./components/faq-accordion-list/faq-accordion-list";
import { SupportContactAside } from "./components/support-contact-aside/support-contact-aside";

export function SupportFaqSection() {
  return (
    <Container
      as="section"
      className="grid grid-cols-[minmax(0,1fr)_310px] max-[900px]:grid-cols-1 gap-6 pt-[53px] pb-[90px] max-[650px]:pt-[30px] max-[650px]:pb-[55px]"
    >
      <FaqAccordionList items={FAQ_ITEMS} />
      <SupportContactAside />
    </Container>
  );
}

export default SupportFaqSection;
