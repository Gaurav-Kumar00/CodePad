import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <div class="wave-container wave">
                <p>© {year}, Developed & Designed with ❤️</p>
            </div>
        </>
    );
}

export default Footer;
