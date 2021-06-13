class Api::VideosController < ApplicationController
  def index
    # Filter for videos that contain search query text
    title = params[:title] ? params[:title] : ""
    @videos = Video.where("title ILIKE ?", "%#{title}%").includes(:author)

    render :index
  end

  def show 
    @video = Video.find(params[:id])
    render :show
  end
  
  def create
    @video = Video.new(video_params)

    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def update
    @video = Video.find(params[:id])

    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = Video.find(params[:id])

    if @video.destroy
      render :show
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
      :play_count, 
      :video_data, 
      :thumbnail
    )
  end
end