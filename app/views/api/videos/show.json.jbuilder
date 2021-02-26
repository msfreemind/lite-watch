json.video do
  json.set! @video.id do
    json.extract! @video, :id, :title, :description

    json.author @video.author.username

    json.likes @video.like_count
    
    json.dislikes @video.dislike_count

    if @video.video_data.attached?
      json.videoUrl url_for(@video.video_data)
    else
      json.videoUrl nil
    end

    if @video.thumbnail.attached?
      json.thumbnailUrl url_for(@video.thumbnail)
    else
      json.thumbnailUrl nil
    end
  end
end

if current_user
  user_reaction = @video.user_reaction(current_user)

  if user_reaction
    json.reaction do
      json.set! user_reaction.id do
        json.extract! user_reaction, :id, :like
        
        json.userId user_reaction.user_id
        
        json.videoId user_reaction.video_id
      end
    end
  end
end

if @video.comments
  json.comments do
    @video.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :text
        
        json.author comment.user.username

        json.videoId comment.video_id
      end
    end
  end
end