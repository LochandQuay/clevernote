class Api::NotesController < ApplicationController
  def new
  end

  def create
    user = User.find(params[:user_id])
    @note = Note.new(note_params)
    # @note = user.notes.create(params[:note])
    render :show
  end

  def edit
    user = User.find(params[:user_id])
    @note = user.notes.find(params[:id])
  end

  def update
    user = User.find(params[:user_id])
    @note = user.notes.find(params[:id])
    @note.update_attributes(note_params)
    render :show
  end

  def destroy
    user = User.find(params[:user_id])
    @note = user.notes.find(params[:id])
    @note.destroy
    render :index
  end

  def show
    user = User.find(params[:user_id])
    @note = user.notes.find(params[:id])
  end

  def index
    user = User.find(params[:user_id])
    @notes = user.notes
    render :index
  end

  private

  def note_params
    params.require(:note).permit(
      :title, :body, :author_id, :notebook_id, :archived)
  end
end
