import React from 'react';
import "./style.css"

class Planets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allPlanets: [],
        };
    }

    componentDidMount() {
        fetch("./data.json")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    this.setState({ allPlanets: data });
                }
            })
    }


    render() {
        if (this.state.allPlanets.length === 0) {
            return (
                <div>
                    Is loading...
                </div>
            );
        }

        return (
            <div className="all-planets">
                {this.state.allPlanets.map((planet) => (
                    <div key={planet.name} className="planet-info">
                        <img src={planet.image} />
                        <div className="planet-text">
                            <p class="p1">
                                { planet.name }
                            </p>
                            <p class="p2">Current missions: { planet.missionStatus.current }</p>
                            <p class="p3">Past missions: { planet.missionStatus.past }</p>
                            <span class="explore">
                                Explore
                                <svg
                                    width="8"
                                    height="14"
                                    viewBox="0 0 8 14"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    class="IconCaret ml-1 text-base">
                                    <path
                                        d="M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Planets;