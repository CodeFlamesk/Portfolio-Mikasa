const BurgerBtn = ({ isOpen }) => {
    return (
        <div className="menu-icon">
                        <input 
                type="checkbox" 
                className="menu-icon-checkbox" 
                checked={isOpen} 
            />
            <div>
                <span className={`bar `}></span>
                <span className={`bar `}></span>
            </div>
        </div>
    );
};

export default BurgerBtn;
