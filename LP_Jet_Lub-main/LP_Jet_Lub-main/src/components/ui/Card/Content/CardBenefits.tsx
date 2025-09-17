interface CardBenefitsProps {
    icon: React.ReactNode
    title: string
    description: string
}

const CardBenefits = ({ icon, title, description }: CardBenefitsProps) => {
    return (
        <div className="flex items-start gap-4">
            {icon}
            <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {title}
                    </h3>
                    <p className="text-muted-foreground">
                      {description}
                    </p>
                  </div>
        </div>
    )
}

export default CardBenefits;

