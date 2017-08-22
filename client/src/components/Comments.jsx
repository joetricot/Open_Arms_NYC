import React, { Component} from 'react';

class Comments extends Component{

    render() {
        return (
            <div className="comments bg-warning col-sm-4 col-sm-12">
                <select className="bg-primary form-control">
                    <option>I would not reccomend this place.</option>
                    <option>This place was so-so.</option>
                    <option>This place was decent.</option>
                    <option>This place was better than most.</option>
                    <option>This was the best place I've been to.</option>
                </select>
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