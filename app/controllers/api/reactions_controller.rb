class Api::ReactionsController < ApplicationController  
  def create
    @reaction = Reaction.find_or_create_by(
      user_id: params[:reaction][:user_id],
      video_id: params[:reaction][:video_id]
    )

    if params[:reaction][:like] == @reaction.like
      @reaction.like = nil
    else
      @reaction.like = params[:reaction][:like]
    end

    if @reaction.save
      render :show
    else
      render json: @reaction.errors.full_messages, status: 422
    end
  end
end