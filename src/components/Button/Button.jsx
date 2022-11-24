import './Button.styles.scss';

export const Button = ({ title, icon, onClick, size = 'medium' }) => {
    return (
        <div className={`button ${size === 'large' && 'button--large'}`} onClick={onClick}>
            <div className="button-text">{title}</div>
            {icon && (
                <div className="button-icon">
                    <img src={icon} alt="icon" />
                </div>
            )}
        </div>
    )
}