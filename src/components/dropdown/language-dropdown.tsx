import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    trigger: React.ReactNode;
}

export function LanguageDropdown({trigger}: Props) {
    const changeLanguage = useLanguageStore((state) => state.setLanguage);

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/80">
                <DropdownMenuItem onClick={() => changeLanguage("EN")}>en</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("ES")}>es</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
