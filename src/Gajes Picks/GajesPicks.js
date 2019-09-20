import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import './GajesPicks.css'

const GajesPicks = () => (
    <Query query={gql`
    {
        years {
        edges {
        node {
            date
            }
        }
        }
    }

`
}>

    {
        ({ loading, error, data }) => {
            if( loading ){
                return(<h1>Loading...</h1>);
            }
                
                return(
                    <div className="Year">
                        {
                            data.years.edges.map((year, key) => {
                                return(
                                    <div key={key}>
                                        <h2>{year.node.date}</h2>
                                        <Link to={`/years/${year.node.slug}`}
                                        >Click on me</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                )

        }
    }
</Query>
)


export default GajesPicks;