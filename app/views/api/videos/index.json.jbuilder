@videos.with_attached_video_data.with_attached_thumbnail.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :description

    json.author video.author.username

    if video.video_data.attached?
      json.videoUrl url_for(video.video_data)
    else
      json.videoUrl nil
    end

    if video.thumbnail.attached?
      json.thumbnailUrl url_for(video.thumbnail)
    else
      json.thumbnailUrl nil
    end
  end
end