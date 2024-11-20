const SpotifyIcon = ({ color = "#222222", hoverColor = "#1ED760" }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="group fill-current transition-colors duration-300 ease-in-out ">
            <g clip-path="url(#clip0_2109_784)">
                <path d="M12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24ZM16.872 17.656V17.657C16.065 17.657 13.516 14.829 6.352 16.297C6.163 16.346 5.916 16.423 5.776 16.423C4.861 16.423 4.686 15.054 5.67 14.845C9.633 13.97 13.683 14.047 17.137 16.113C17.961 16.639 17.611 17.656 16.872 17.656ZM18.175 14.483C18.062 14.453 18.095 14.552 17.578 14.28C14.553 12.49 10.045 11.768 6.033 12.857C5.801 12.92 5.675 12.983 5.457 12.983C4.386 12.983 4.102 11.372 5.269 11.043C9.985 9.718 15.044 10.491 18.566 12.586C18.958 12.818 19.113 13.119 19.113 13.539C19.108 14.061 18.702 14.483 18.175 14.483ZM4.548 6.998C9.071 5.674 15.916 6.092 20.172 8.576C21.263 9.205 20.834 10.796 19.674 10.796L19.673 10.795C19.421 10.795 19.266 10.732 19.048 10.606C15.605 8.55 9.444 8.057 5.458 9.17C5.283 9.218 5.065 9.295 4.833 9.295C4.194 9.295 3.706 8.796 3.706 8.153C3.706 7.496 4.113 7.124 4.548 6.998Z" className="group-hover:fill-[#1ED760]"
                    fill={color} />
            </g>
            <defs>
                <clipPath id="clip0_2109_784">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};
export default SpotifyIcon;