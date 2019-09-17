import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'



class Toaster extends Component {
    render() {
        const props = this.props;
        console.log({props});


        if ( !props.data.toaster) {
            return(<p>Loading now...</p>)
        }

        return(
            <div>
                <h2>{props.data.toaster.title}</h2>
                <strong>{props.data.toaster.toasterMeta.price}</strong>
                <br />
                <strong>{props.data.toaster.toasterMeta.watts}</strong>
            </div>
        );


    }



}




const GetToasterBySlug = gql`
query getToasterBySlug($slug: String) {
    toaster: toasterBy(uri: $slug){
      title
      toasterMeta {
        price
        watts
      }
    }
  }
`;

export default graphql(GetToasterBySlug, {
    options: (props) => {
        const slug = props.match.params.slug;
        return {
            variables: {
                slug
            }
        }
    }
})(Toaster);