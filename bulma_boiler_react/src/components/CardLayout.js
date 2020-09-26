import React from 'react'
import Card from '../elements/Card';

function CardLayout() {
    return (
    <section className="content-cards py-4 px-4">
        <div className="container">
            <div className="columns is-multiline is-centered">
                {[1, 2, 3, 4, 5, 6].map(() => (
                    <div className="column is-12-mobile is-6-tablet is-4-desktop py-4 px-4">
                        <Card />
                    </div>
                ))}
            </div>
        </div>
    </section>

    )
}

export default CardLayout
