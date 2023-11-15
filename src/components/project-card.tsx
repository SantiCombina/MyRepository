interface Props {
    image: string;
    name: string;
    description: string;
    deploy: string;
    repository: string;
}

export function ProjectCard({image, name, description, deploy, repository}: Props) {
    return (
        <div className="rounded-xl bg-[#100d25] p-2 flex flex-col justify-between gap-2 hover:bg-[#141031] cursor-pointer">
            <div className="flex flex-col gap-2">
                <img alt="" className="rounded-t-lg select-none" src={image} />
                <h2 className="font-semibold text-center">{name}</h2>
                <p className="px-2">{description}</p>
            </div>
            <div className="flex justify-center gap-8 text-[#E5E5E5]">
                <a href={deploy} rel="noreferrer" target="_blank">
                    Deploy
                </a>
                <a href={repository} rel="noreferrer" target="_blank">
                    Repositorio
                </a>
            </div>
        </div>
    );
}
