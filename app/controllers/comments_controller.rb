class CommentsController < ApplicationController

  skip_before_action :verify_authenticity_token,:only =>[:update,:destroy]
  
  def index
      @presenter ={:comments => Comment.all} 
  end

  def create
     @comment = Comment.new(comment_params)
        if @comment.save
          redirect_to comments_path
        else
          render 'new'
        end
  end

  def show
    @presenter = {:comment => Comment.find(params[:id])}
  end

  def new
      @presenter = {
           :comment => Comment.new,
           :form => {
           :action => comments_path,
           :csrf_param => request_forgery_protection_token,
           :csrf_token => form_authenticity_token
           }
      }
    # render :json => @presenter[:comment] and return
  end

  def edit
      @presenter = {
          :comment => Comment.find(params[:id]),
            :form => {
                :action => comment_path(params[:id]),
                :csrf_param => request_forgery_protection_token,
                :csrf_token => form_authenticity_token
            }
         }
  end

  def update
      @comment = Comment.find(params[:id])
      @comment.author = params[:author]
      @comment.text = params[:text]
      @comment.save
      # redirect_to comments_path, format: 'js'
      render :text => "update"
         
      
  end

  def destroy
    Comment.destroy(params[:id])
     render :text => "njnjnnnj"
  end

  private

  def comment_params
    params.require(:comment).permit(:author,:text)
  end

end
# format.html { redirect_to edit_admin_item_path(@item),
# :flash => {:success => "#{@item.name} was successfully created."} }