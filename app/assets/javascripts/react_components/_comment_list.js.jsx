/** @jsx React.DOM */

var CommentList = React.createClass({
  
  // new:function(event){
  //   React.renderComponent(<CommentForm/>)
  //   },

      getInitialState: function () {
         return JSON.parse(this.props.presenter);
      },
      render:function(){
              return(
                <div>
                    <h3> comments index </h3>
                    <table>
                      <tr>
                        <th>sno</th>
                        <th>name</th>
                        <th>comment</th>
                        <th>actions</th>
                      </tr>
                      <tbody>
                            {this.state.comments.map(function(comment,i){
                                return <CommentRow key={i} data={comment} />  
                            })}
                      </tbody>     
                    </table>
                  <a href={'/comments/new'}>New comment</a> 
                </div>
                )
             }
});

  var CommentRow = 
      React.createClass({
            destroy:function(){
              $.ajax
                  ({
                      type: 'DELETE',
                      url: "http://localhost:3000/comments/"+this.props.data.id,
                      success: function(){
                         window.location.href='http://localhost:3000/comments';
          
                      }
                  });
            },
            render:function(){
                return (
                        <tr key={0}>
                            <td>{this.props.data.id}</td>
                            <td>{this.props.data.author}</td>
                            <td>{this.props.data.text}</td>
                            <td><a href={'/comments/'+this.props.data.id}>Show</a>&nbsp;
                                <a href={'/comments/'+this.props.data.id+'/edit'}>Edit</a>&nbsp;                             
                                <button onClick={this.destroy}>Delete</button> 
                                </td>
                        </tr>
                    )    
            } // 
         
      });

 