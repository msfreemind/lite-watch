json.extract! @comment, :id, :text
json.author @comment.user.username
json.videoId @comment.video_id