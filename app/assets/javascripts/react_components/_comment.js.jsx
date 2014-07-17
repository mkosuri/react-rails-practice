/** @jsx React.DOM */

var Comment = React.createClass({
  
  // edit:function(){
  //   alert(this.state.comment.id);
  //   window.location.href='http://localhost:3000/comments/:id/edit';
           
  // },
  // back:function(){
  //   window.location.href='http://localhost:3000/comments';
           
  // },

   getInitialState: function () {
     return JSON.parse(this.props.presenter);
  },
	
 
  render: function () {
    return (
	      <div>
	        <h3>comments show page</h3>
	          <p>
	            <strong>ID</strong>
               :{this.state.comment.id} 
            </p>
            <p>
              <strong>Name</strong>
               :{this.state.comment.author} 
            </p>
            <p>
              <strong>comment</strong>
               :{this.state.comment.text} 
            </p>
          <a href={'/comments'}>Back</a> &nbsp;
          <a href={'/comments/'+this.state.comment.id+'/edit'}>Edit</a>
	      </div>
    )
  }
});

// <button onClick={this.back} >Back button</button>
          // <button onClick={this.edit} >Edit button</button> 



