import CardBenefits from "./CardBenefits";
import CardDescription from "./CardDescription";
import CardFeatures from "./CardFeatures";
import CardTitle from "./CardTitle";

interface CardTextProps {
    icon?: React.ReactNode
    children: React.ReactNode
}

const CardText = ({ icon, children }: CardTextProps) => {
    return (
        <div className="flex-1 space-y-6 animate-in slide-in-from-left-8 duration-700 delay-200">
            <div className="flex items-center animate-in zoom-in duration-500 delay-300">
                {icon && icon}
            </div>
            {children}
        </div>
    )
}

CardText.Title = CardTitle;
CardText.Description = CardDescription;
CardText.Features = CardFeatures;
CardText.Benefits = CardBenefits;

export default CardText;