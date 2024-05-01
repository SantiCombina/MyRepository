import {motion} from "framer-motion";

interface Props {
    h2: string;
    h3: string;
}

export function Title({h2, h3}: Props) {
    return (
        <motion.div
            className="flex flex-col w-fit"
            initial={{x: -200, opacity: 0}}
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.3}}
            whileInView={{x: 0, opacity: 1}}
        >
            <h2 className="text-[#AAA6C3] text-sm">{h2}</h2>
            <h3 className="text-3xl font-bold">{h3}</h3>
        </motion.div>
    );
}
