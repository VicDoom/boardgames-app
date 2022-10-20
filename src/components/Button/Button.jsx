import './Button.styles.scss';

export const Button = ({ title, icon }) => {
    return (
        <div className="button">
            <div className="button-text">{title}</div>
            {icon && (
                <div className="button-icon">
                    <img src={icon} alt="icon" />
                </div>
            )}
        </div>
    )
}