class Api::VideosController < ApplicationController
  def index
    title = params[:title] ? params[:title] : ""
    @videos = Video.where("title ILIKE ?", "%#{title}%")

    render :index
  end
  
  def create
    @video = Video.new(video_params)

    if @video.save
      render json: @video
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  private

  def video_params
    params.require(:video).permit(
      :title, 
      :description, 
      :author_id, 
      :video_data, 
      :thumbnail
    )
  end
end