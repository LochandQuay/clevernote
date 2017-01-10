class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      user_params[:username], user_params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid usename or password"], status: 401
    end
  end

  def destroy
  end
end
