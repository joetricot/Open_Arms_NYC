import React, { Component} from 'react';

class Comments extends Component{

    render() {
        return (
            <div className="bg-primary col-xs-12">
                <ol>
                  <li>1 THIS IS THE COMMENT AREA</li>  
                    <li>2 THIS IS THE COMMENT AREA</li>       
                        <li>3 THIS IS THE COMMENT AREA</li> 
                            <li>4 THIS IS THE COMMENT AREA</li> 
                </ol>
            </div>
        )
    }
}

export default Comments;