import React, { Component} from 'react';

class Comments extends Component{

    render() {
        return (
            <div className="comments bg-warning col-xs-4">
                <ol className="">
                  <li>1 THIS IS THE COMMENT AREA</li>  
                    <li>2 THIS IS THE COMMENT AREA</li>       
                        <li>3 THIS IS THE COMMENT AREA</li> 
                            <li>4 THIS IS THE COMMENT AREA</li> 
                              <li>1 THIS IS THE COMMENT AREA</li>  
                    <li>2 THIS IS THE COMMENT AREA</li>       
                        <li>3 THIS IS THE COMMENT AREA</li> 
                            <li>4 THIS IS THE COMMENT AREA</li> 
                              <li>1 THIS IS THE COMMENT AREA</li>  
                    <li>2 THIS IS THE COMMENT AREA</li>       
                        <li>3 THIS IS THE COMMENT AREA</li> 
                            <li>4 THIS IS THE COMMENT AREA</li> 
                              <li>1 THIS IS THE COMMENT AREA</li>  
                    <li>2 THIS IS THE COMMENT AREA</li>       
                        <li>3 THIS IS THE COMMENT AREA</li> 
                            <li>4 THIS IS THE COMMENT AREA</li> 
                              <li>1 THIS IS THE COMMENT AREA</li>  
                    <li>2 THIS IS THE COMMENT AREA</li>       
                        <li>3 THIS IS THE COMMENT AREA</li> 
                            <li>4 THIS IS THE COMMENT AREA</li>   <li>1 THIS IS THE COMMENT AREA</li>  
                    <li>2 THIS IS THE COMMENT AREA</li>       
                    <li>2 THIS IS THE COMMENT AREA</li> 
                </ol>
                <select class="form-control" col-xs-4>
                    <option>I would not reccomend this place.</option>
                    <option>This place was so-so.</option>
                    <option>This place was decent.</option>
                    <option>This place was better than most.</option>
                    <option>This was the best place I've been to.</option>
                </select>
            </div>
        )
    }
}

export default Comments;