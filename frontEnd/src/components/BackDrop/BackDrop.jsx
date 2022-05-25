import { GrClose } from "react-icons/gr";
import { Section, CloseBtn } from "./backDropStyle";
const Backdrop = ({ call, closeBtn, callBy }) => {
  return (
    <Section call={call} onClick={() => closeBtn(false)} className="Hello">
      <CloseBtn>
        <GrClose />
      </CloseBtn>
    </Section>
  );
};
export default Backdrop;
//Harsh
