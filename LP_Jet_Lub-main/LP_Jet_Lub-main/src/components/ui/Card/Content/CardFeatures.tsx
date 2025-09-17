interface CardFeaturesProps {
    icon: React.ReactNode
    text: string
}

const CardFeatures = ({ icon, text }: CardFeaturesProps) => {
    return (
        <div className="space-y-4">
            <div
                className={`flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-600
                  transform hover:translate-x-2 transition-transform duration-300`}
            >
                {icon}
                <span className="text-foreground">{text}</span>
            </div>
        </div>
    )
}

export default CardFeatures;