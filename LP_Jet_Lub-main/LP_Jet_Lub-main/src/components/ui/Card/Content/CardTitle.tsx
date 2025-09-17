interface CardTitleProps {
    title: string
    subtitle?: string
}

const CardTitle = ({ title, subtitle }: CardTitleProps) => {
    return (
        <h2 className="text-4xl font-bold text-foreground animate-in slide-in-from-bottom-4 duration-600 delay-400">
            <span className="text-primary">{title}{" "}</span>
            {subtitle}
        </h2>
    )
}

export default CardTitle;
