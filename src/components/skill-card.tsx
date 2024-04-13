interface Props {
    image: string;
    name: string;
}

export function SkillCard({image, name}: Props) {
    return (
        <div className="flex flex-col items-center w-16 md:w-24 gap-1 text-sm text-[#DFD9FF]">
            <img
                alt="skill image"
                className="transition-transform duration-700 hover:[transform:rotateY(-360deg)]"
                height={"96"}
                src={image}
                width={"96"}
            />
            {name}
        </div>
    );
}
