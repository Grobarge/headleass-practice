import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

const Years = () => (
    <Query query={gql`
        {
            years {
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
                        <div>
                            {
                                data.years.edges.map((year, key) => {
                                    return(
                                        <div key={key}>
                                            <h2>{year.node.title}</h2>
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

export default Years;