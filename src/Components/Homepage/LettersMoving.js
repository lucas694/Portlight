import "./LettersMoving.css";
import {motion} from "framer-motion";

const LettersMoving = () => {
  return (
    <div className={"LettersMovingContainer"}>
      <hr className={"LettersMovingHr"} />
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity }}
        className={"w-full "}
        style={{ x: "-80%" }}
        initial={{ x: "100%" }}
        offset={-0.1}
      >
        <h1 className={"TextAnimate"}>Build Your website with softlight Template Today.</h1>
      </motion.div>
      <hr className={"LettersMovingHr"} />
    </div>
  );
};export default LettersMoving;