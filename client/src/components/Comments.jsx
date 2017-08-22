import React, { Component} from 'react';

class Comments extends Component {
  render() {
    return (
      <div className="comments bg-warning col-sm-4 col-sm-12">
        <form>
        <select className="bg-primary form-control">
          <option value={1}>I would not reccomend this place.</option>
          <option value={2}>This place was so-so.</option>
          <option value={3}>This place was decent.</option>
          <option value={4}>This place was better than most.</option>
          <option value={5}>This was the best place Ive been to.</option>
          </select>
          <button type='submit'>submit</button>
        </form>
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