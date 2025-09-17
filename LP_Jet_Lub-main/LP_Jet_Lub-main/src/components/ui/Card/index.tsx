import CardImage from "./Content/CardImage";
import CardText from "./Content/CardText";

export const Card = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="bg-card rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row items-center gap-8 animate-in slide-in-from-bottom-6 duration-700 hover:scale-[1.02] transition-transform">
          {children}
        </div>
    )
}

Card.Text = CardText;
Card.Image = CardImage;

export default Card;