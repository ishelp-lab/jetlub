interface CardImageProps {
    src: string
    alt: string
}

const CardImage = ({ src, alt }: CardImageProps) => (
    <div className="flex-1 animate-in slide-in-from-right-8 duration-700 delay-400">
        <img src={src} alt={alt} className="w-full h-96 object-cover rounded-[77px] transform hover:scale-105 transition-transform duration-500" />
    </div>
  )

export default CardImage;