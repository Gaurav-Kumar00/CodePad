import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <div class="wave-container wave">
                <p>© {year}, Developed & Designed with ❤️ by Prabha Sharma</p>
            </div>
        </>
    );
}

export default Footer;
