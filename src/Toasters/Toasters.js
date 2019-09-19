import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import './Toasters.css';

const Toasters = () => (
    <Query query={gql`
        {
            toasters {
            edges {
            node {
                title
                slug
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
                        <div className="Toasters">
                            {
                                data.toasters.edges.map((toaster, key) => {
                                    return(
                                        <div key={key}>
                                            <h2>{toaster.node.title}</h2>
                                            <Link to={`/toaster/${toaster.node.slug}`}
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

export default Toasters;