 /** @jsx React.DOM */

var EditComment = React.createClass({
 
  handleCommentSubmit: function (event) {

    var id = this.state.comment.id
    var author = this.refs.author.getDOMNode().value.trim()
    var text = this.refs.text.getDOMNode().value
    alert(author)

    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/comments/'+this.state.comment.id,
      data: {id: id,author: author,text: text,csrf_token:this.state.form.csrf_param},
        success: function(){
          window.location.href='http://localhost:3000/comments';
        }
    });
  },
  
  getInitialState: function () {
     return JSON.parse(this.props.presenter);
  },
  render:function(){
          return(
            <div>
              <h4>Edit-form</h4>
                      <p><input ref="author" name="comment[author]" defaultValue ={this.state.comment.author} /></p>                      
                      <p><textarea ref ="text" name="comment[text]" defaultValue ={this.state.comment.text} placeholder="Give comment" /></p>
                      <p><button onClick={this.handleCommentSubmit} >Update comment</button></p>
                      
                                             
            </div>
          )
    }
});
