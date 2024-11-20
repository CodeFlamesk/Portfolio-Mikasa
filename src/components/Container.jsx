const Container = ({ children, style }) => {
    return (
        <div className={`mx-auto max-w-[686px] px-4 w-full  flex relative items-start ${style}`}>
            {children}
        </div>

    );
};
export default Container;