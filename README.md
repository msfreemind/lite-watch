# LiteWatch

## Overview

[LiteWatch](https://www.lite.watch "LiteWatch") is a platform for sharing and reacting to videos.

## Technologies Used

LiteWatch features HTML5 video playback. The frontend is written within a React/Redux framework to allow for fast site navigation, while the backend is Ruby on Rails on top of a PostgreSQL database. The Rails server responds to AJAX requests with JSON that is built using the Jbuilder gem.

## Video Uploading / Custom Thumbnails

I've always been dissatisfied with the fact that YouTube doesn't allow users to select which frame of their video to be used as a thumbnail. If you don't like the frame selections that YouTube suggests, you must manually create an image on your own and then upload it separately.

On LiteWatch, users are able to select any frame they want for the thumbnail image. Implementing this wasn't too difficult, but it required a bit of research and trial-and-error. The challenge was how to extract a high-quality image from the frame while accounting for non-standard video dimensions. After some research, I discovered that Canvas images can be converted to Blob objects, which can be stored as image data on the backend:

```javascript
const vid = document.getElementById("video");
const canvas = document.getElementById("prevImgCanvas");
let ctx = canvas.getContext('2d');

ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);

...

canvas.toBlob(blob => {
  formData.append('video[thumbnail]', blob)

  this.props.createVideo(formData).then(
    () => this.props.history.push("/")
  ); 
}); 
```

After testing this, I saw that it worked for videos with standard 16:9 dimensions but not for non-standard videos. To make it all work, I needed to use the longer form of the drawImage() method, along with some math, in order to select a 16:9 sub-rectangle of the source image:

```javascript
ctx.drawImage(vid, 0, 0, vid.videoWidth, Math.floor(vid.videoWidth * (9 / 16)), 0, 0, canvas.width, canvas.height);
```

Once the user hits submit, the video data/details are sent via AJAX to the backend as a FormData object. Note again how the hidden Canvas element is converted to a Blob object before being submitted:

```javascript
const formData = new FormData();
const canvas = document.getElementById("prevImgCanvas");
this.updateCanvas();

this.loadSpinner();

formData.append('video[title]', this.state.title);
formData.append('video[description]', this.state.description);
formData.append('video[author_id]', this.props.currentUser.id);
formData.append('video[video_data]', this.state.videoFile); 

canvas.toBlob(blob => {
  formData.append('video[thumbnail]', blob)

  this.props.createVideo(formData).then(
    () => this.props.history.push("/")
  ); 
});  
```

## Video Likes/Dislikes

Another challenge was to implement user likes/dislikes so that the frontend and backend remained synchronized and so that I didn't have to delete and create a new table entry every time a user changed his/her reaction to a video.

User likes/dislikes are stored in a single **Reaction** table:

## `reactions`
column name | data type | details
--- |:---:| ---
`id` | integer | not null, primary key
`like` | boolean | 
`user_id` | integer | not null, indexed, foreign key
`video_id` | integer | not null, indexed, foreign key
`created_at` | datetime | not null
`updated_at` | datetime | not null

The first step to implement reactions properly was to make use of the ability for Ruby booleans to have one of three values: true, false or nil. This way, rather than deleting a table entry every time a user changed his/her reaction to video, I could just set the 'like' column for that entry to nil within the reactions controller:

```ruby
def create
  @reaction = Reaction.find_or_create_by(
    user_id: params[:reaction][:user_id],
    video_id: params[:reaction][:video_id]
  )

  if params[:reaction][:like] == @reaction.like.to_s
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
```

The last step was to perform some nuanced conditional logic on the frontend to determine what the correct reaction counts were, based on the previous reaction count and the reaction the user just made:

```javascript
createReaction(newReaction).then(
  () => {
    if (reaction && reaction.like === likeValue) {
      this.setState({ [event.target.id]: this.state[event.target.id] -= 1 })
    } else if (event.target.id === "likes") {
      if (reaction && reaction.like === false) {
        this.setState({ likes: this.state.likes += 1, dislikes: this.state.dislikes -= 1 })
      } else {
        this.setState({ likes: this.state.likes += 1 })
      }   
    } else {
      if (reaction && reaction.like === true) {
        this.setState({ dislikes: this.state.dislikes += 1, likes: this.state.likes -= 1 })
      } else {
        this.setState({ dislikes: this.state.dislikes += 1 })
      }
    }
  }
);
```
