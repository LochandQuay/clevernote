class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render api_user
    else
      render json: @user.errors.full_messages, status: 422
  end

  def show
    if current_user
    else
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
