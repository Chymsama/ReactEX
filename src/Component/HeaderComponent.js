import React from 'react';
import './styles.css'; // Import tệp CSS

function Header() {
    return (
        <div className="jumbotron"> {/* Sử dụng class CSS tùy chỉnh */}
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>
                            We take inspiration from the World's best cuisines, and create a unique fusion experience.
                            Our lipsmacking creations will tickle your culinary senses!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
