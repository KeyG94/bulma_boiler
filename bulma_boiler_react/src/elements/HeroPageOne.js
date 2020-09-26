import React from 'react'

function HeroPageOne() {
    return (
        <div className="container">
            <div className="columns is-vcentered">
                <div className="column is-12-mobile is-6-tablet hero-text">
                <h1 className="title is-title is-size-1 has-text-light has-text-weight-bold">
                    Analytics made easy.
                </h1>
                <p className="subtitle has-text-light mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation. 
                </p>
                <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Email"></input>
                </div>
                    <div className="control">
                    <a href="/" className="button is-info">
                        Submit
                    </a>
                    </div>
                </div>
                </div>
                <div className="column is-6-desktop is-hidden-mobile is-hidden-tablet-only">
                <img src="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png" alt="Graph" />
                </div>
            </div>
        </div>
    )
}

export default HeroPageOne
