import Image from 'next/image';

const Button = ({
    onClick,
    disabled,
    imageSrc,
    imageAlt,
    imageSize,
    className,
    classNameForImage,
}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {imageSrc && imageSize ? (
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageSize.width}
                    height={imageSize.height}
                    className={classNameForImage}
                />
            ) : null}
        </button>
    );
};

export default Button;
