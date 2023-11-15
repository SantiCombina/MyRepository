interface Props {
    image: string;
    name: string;
    description: string;
    deploy: string;
    repository: string;
}

export function ProjectCard({image, name, description, deploy, repository}: Props) {
    const buttonStyle =
        "px-3 text-[#DFD9FF] transition-transform duration-300 bg-[#100d25] rounded-md active:scale-100 shadow-primary shadow-md hover:scale-110";

    return (
        <div className="rounded-xl bg-[#100d25] p-2 flex flex-col justify-between gap-2 hover:bg-[#141031] cursor-pointer">
            <div className="flex flex-col gap-2">
                <img alt="" className="rounded-t-lg select-none" src={image} />
                <h2 className="px-3 text-lg font-bold">{name}</h2>
                <p className="px-3 text-[#DFD9FF]">{description}</p>
            </div>
            <div className="flex justify-center gap-6 pt-3 pb-1">
                <a className={buttonStyle} href={deploy} rel="noreferrer" target="_blank">
                    Deploy
                </a>
                <a className={buttonStyle} href={repository} rel="noreferrer" target="_blank">
                    Repository
                </a>
            </div>
        </div>
    );
}
