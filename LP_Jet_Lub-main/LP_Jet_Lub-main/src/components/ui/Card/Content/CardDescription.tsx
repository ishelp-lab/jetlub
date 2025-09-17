const CardDescription = ({ children }: React.PropsWithChildren) => {
    return (
        <p className="text-lg text-foreground leading-relaxed animate-in slide-in-from-bottom-4 duration-600">
            {children}
        </p>
    )
}

export default CardDescription;


