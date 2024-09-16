import {motion} from "framer-motion";

interface Props {
    image: string;
    name: string;
    description: string;
    deploy: string;
}

export function ProjectCard({image, name, description, deploy}: Props) {
    const item = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <motion.article
            className="rounded-xl max-w-[370px] p-2 flex flex-col hover:bg-[#151030] transition-colors duration-300"
            variants={item}
        >
            <div className="relative flex flex-col">
                <a
                    aria-label="Go to deploy"
                    className="relative cursor-pointer group"
                    href={deploy}
                    rel="noreferrer"
                    target="_blank"
                >
                    <img alt="project image" className="rounded-t-lg select-none" src={image} width={370} />
                    <i className="absolute text-gray-300 transition-all top-3 right-3 fa-regular fa-arrow-up-right-from-square group-hover:text-white group-hover:scale-110" />
                </a>
                <h2 className="px-3 pt-3 text-lg font-bold">{name}</h2>
                <p className="px-3 pt-[2px] leading-snug text-[#DFD9FF]">{description}</p>
                {/* <div className="flex justify-start gap-6 px-3 py-1 text-sm text-blue-600">#techs #coming #soon</div> */}
            </div>
        </motion.article>
    );
}

// TODO: Add techs
