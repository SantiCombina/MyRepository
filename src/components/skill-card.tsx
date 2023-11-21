interface Props {
    image: string;
    name: string;
}

export function SkillCard({image, name}: Props) {
    return (
        <div className="bg-red">
            {name}
            <img alt="" src={image} />
        </div>
    );
}
