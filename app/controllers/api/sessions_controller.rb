class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      render json: '["Invalid username or password."]', status: 422
    else
      login!(@user)
      render :show
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: '["No user logged in!"]', status: 404
    end
  end
end